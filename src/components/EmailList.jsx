// components/EmailList.jsx
import React, { useState } from 'react';
import EmailItem from './EmailIItems';
import { MdDelete, MdEmail } from 'react-icons/md';

const EmailList = ({ onEmailClick }) => {
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: 'GitHub',
      senderEmail: 'notifications@github.com',
      subject: 'Your daily developer insights',
      details: 'Here are the repositories you might be interested in based on your recent activity...',
      time: '9:42 AM',
      date: 'Today',
      unread: true,
      starred: false,
      important: true,
      labels: ['Work']
    },
    {
      id: 2,
      sender: 'Twitter',
      senderEmail: 'info@twitter.com',
      subject: 'New login to your account',
      details: 'We noticed a new login to your Twitter account. If this was you, you can ignore this message...',
      time: 'Yesterday',
      date: 'Mar 12',
      unread: true,
      starred: true,
      important: false,
      labels: ['Personal']
    },
    {
      id: 3,
      sender: 'Amazon Web Services',
      senderEmail: 'aws@amazon.com',
      subject: 'AWS Summit 2024 Registration Now Open',
      details: 'Join us for AWS Summit 2024 - a free virtual event packed with innovation...',
      time: 'Mar 11',
      date: 'Mar 11',
      unread: false,
      starred: false,
      important: true,
      labels: ['Work', 'Important']
    },
    {
      id: 4,
      sender: 'Netflix',
      senderEmail: 'info@netflix.com',
      subject: 'Your monthly subscription receipt',
      details: 'Thank you for your Netflix membership. Here is your receipt for the latest billing period...',
      time: 'Mar 10',
      date: 'Mar 10',
      unread: false,
      starred: false,
      important: false,
      labels: ['Personal']
    },
    {
      id: 5,
      sender: 'LinkedIn',
      senderEmail: 'messages-noreply@linkedin.com',
      subject: 'You have 3 new connection requests',
      details: 'Expand your professional network by accepting these connection requests...',
      time: 'Mar 9',
      date: 'Mar 9',
      unread: false,
      starred: true,
      important: false,
      labels: ['Work']
    }
  ]);

  const [selectedEmails, setSelectedEmails] = useState(new Set());

  const toggleSelectEmail = (emailId) => {
    const newSelected = new Set(selectedEmails);
    if (newSelected.has(emailId)) {
      newSelected.delete(emailId);
    } else {
      newSelected.add(emailId);
    }
    setSelectedEmails(newSelected);
  };

  const toggleStar = (emailId) => {
    setEmails(emails.map(email => 
      email.id === emailId ? { ...email, starred: !email.starred } : email
    ));
  };

  const toggleImportant = (emailId) => {
    setEmails(emails.map(email => 
      email.id === emailId ? { ...email, important: !email.important } : email
    ));
  };

  const markAsRead = (emailId) => {
    setEmails(emails.map(email => 
      email.id === emailId ? { ...email, unread: false } : email
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Email List Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className='text-xl font-bold'>Items selected</span>
          </div>
        </div>
        <div className="flex items-center gap-4 font-semibold space-x-2 text-sm text-gray-500">
          <button className='flex justify-center items-center gap-2 cursor-pointer'><MdEmail size={20} /><span>Mark as read</span></button>
          <button className='flex justify-center items-center gap-2 cursor-pointer'><MdDelete size={20} /> <span>Archive</span></button>
          
        </div>
      </div>

      {/* Email Items */}
      <div className="divide-y divide-gray-200">
        {emails.map((email) => (
          <EmailItem
            key={email.id}
            email={email}
            isSelected={selectedEmails.has(email.id)}
            onSelect={() => toggleSelectEmail(email.id)}
            onStar={() => toggleStar(email.id)}
            onImportant={() => toggleImportant(email.id)}
            onMarkAsRead={() => markAsRead(email.id)}
            onClick={() => onEmailClick(email)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;