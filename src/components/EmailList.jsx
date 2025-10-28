// components/EmailList.jsx
import React, { useState } from "react";
import EmailItem from "./EmailIItems";
import { MdDelete, MdEmail } from "react-icons/md";

const EmailList = ({ onEmailClick }) => {
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: "GitHub",
      senderEmail: "notifications@github.com",
      subject: "Your daily developer insights",
      details:
        "Here are the repositories you might be interested in based on your recent activity...",
      selected: false,
    },
    {
      id: 2,
      sender: "Twitter",
      senderEmail: "info@twitter.com",
      subject: "New login to your account",
      details:
        "We noticed a new login to your Twitter account. If this was you, you can ignore this message...",
      selected: false,
    },
    {
      id: 3,
      sender: "Amazon Web Services",
      senderEmail: "aws@amazon.com",
      subject: "AWS Summit 2024 Registration Now Open",
      details:
        "Join us for AWS Summit 2024 - a free virtual event packed with innovation...",
      selected: false,
    },
    {
      id: 4,
      sender: "Netflix",
      senderEmail: "info@netflix.com",
      subject: "Your monthly subscription receipt",
      details:
        "Thank you for your Netflix membership. Here is your receipt for the latest billing period...",
      selected: false,
    },
    {
      id: 5,
      sender: "LinkedIn",
      senderEmail: "messages-noreply@linkedin.com",
      subject: "You have 3 new connection requests",
      details:
        "Expand your professional network by accepting these connection requests...",
      selected: false,
    },
  ]);

  const [count, setCount] = useState(0)

  const handleSelect = (id) => {
    setCount(count + 1)
    const newArray = emails.map((e)=>{
      if (e.id === id){
        return {...e, selected: !e.selected}
      }else{
        return e
      }

      
    })
    setEmails(newArray)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">

      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-xl font-bold">{`Items selected (${count})`}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 font-semibold space-x-2 text-sm text-gray-500">
          <button className="flex justify-center items-center gap-2 cursor-pointer">
            <MdEmail size={20} />
            <span>Mark as read</span>
          </button>
          <button className="flex justify-center items-center gap-2 cursor-pointer">
            <MdDelete size={20} /> <span>Archive</span>
          </button>
        </div>
      </div>

  
      <div className="divide-y divide-gray-200">
        {emails.map((email) => (
          <EmailItem
            key={email.id}
            email={email}
            handleSelect={handleSelect}
            onClick={() => onEmailClick(email)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
