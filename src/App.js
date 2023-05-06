import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import "./App.css";
import { ChatFeed } from "./components/ChatFeed";

const projectID = "ac9dd198-b356-4b4e-a41b-9d1d2b767ac7";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        userName="greyhound"
        userSecret="12345678"
        projectID={projectID}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
