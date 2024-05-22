import React, { useState } from "react";
import Chatbot from "react-simple-chatbot";
import { MdClose } from "react-icons/md";
import { BiSolidChat } from "react-icons/bi";
import "./mobibot.css"; 

const steps = [
  {
    id: "1",
    message: "comment je peux vous aider?",
    trigger: "2"
  },
  {
    id: "2",
    options: [
      { value: 1, label: "contact", trigger: "4" },
      { value: 2, label: "internet", trigger: "3" },
      { value: 3, label: "autre", trigger: "3" }
    ]
  },
  {
    id: "3",
    options: [
      { value: 4, label: "contact", trigger: "4" },
      { value: 5, label: "internet", trigger: "3" },
      { value: 6, label: "autre", trigger: "3" }
    ]
  },
  {
    id: "4",
    message: "mobilisreclamation@email.com",
    end: true
  },
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
