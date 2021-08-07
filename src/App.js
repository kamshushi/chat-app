import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="dc8a50e4-2043-4446-a80f-699d9d67ecbf"
      userName="kamshushi"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
