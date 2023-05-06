import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import "./App.css";
import { ChatFeed } from "./components/ChatFeed";

const projectID = "1b7801d6-8a66-4be4-a442-89219d833dfc";

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
