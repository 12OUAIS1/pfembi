import React, { useState } from "react";
import Chatbot from "react-simple-chatbot";
import { MdClose } from "react-icons/md";
import { BiSolidChat } from "react-icons/bi";
import "./mobibot.css"; // Import your CSS file for styling

const steps = [
  {
    id: "1",
    message: "What number am I thinking?",
    trigger: "2"
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Number 1", trigger: "4" },
      { value: 2, label: "Number 2", trigger: "3" },
      { value: 3, label: "Number 3", trigger: "3" }
    ]
  },
  {
    id: "3",
    message: "Wrong answer, try again.",
    trigger: "2"
  },
  {
    id: "4",
    message: "Awesome! You are a telepath!",
    end: true
  }
];

export default function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };

  return (
    <div>
      <button className="chat-btn" onClick={toggleChatbot}>
        {showChatbot ? <MdClose/> : <BiSolidChat/>}
      </button>
      {showChatbot && <Chatbot steps={steps} className="chatbot" />}
    </div>
  );
}
