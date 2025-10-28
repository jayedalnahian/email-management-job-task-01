import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import EmailList from "../components/EmailList";
import Modal from "../components/Modal";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    setIsModalOpen(true);
  };
  return (
    <div className="flex h-screen bg-gray-50">
     
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

  
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4">
          <EmailList onEmailClick={handleEmailClick} />
        </main>
      </div>

     
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        email={selectedEmail}
      />
    </div>
  );
};

export default Home;
