// components/Modal.jsx
import React from "react";
import { IoClose } from "react-icons/io5";
import { MdDelete, MdEmail } from "react-icons/md";

const Modal = ({ isOpen, onClose, email }) => {
  if (!isOpen || !email) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-[#4C5764CC] bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

   
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-[752px]">
        <div className="h-full bg-white shadow-xl transform transition-transform">
          {/* Header*/}
          <div className="flex items-center justify-between p-6 border-b">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full flex justify-center items-center gap-5 transition-colors"
              aria-label="Close modal"
            >
              <IoClose size={30} />
              <span className="text-xl font-semibold">{`Close (Esc)`}</span>
            </button>
            <div className="space-x-4 flex  font-semibold">
              <button className="flex cursor-pointer justify-center hover:bg-gray-100 rounded-full p-3 items-center"><span><MdEmail size={20}/></span>Mark as read</button>
              <button className="flex cursor-pointer hover:bg-gray-100 p-3 rounded-full justify-center items-center"><span><MdDelete size={20}/></span>Archive</button>
            </div>
          </div>

          {/* Content */}
          <div className="h-full overflow-y-auto">
            <div className="mx-5">
                <h3 className="text-xl font-semibold mt-6">{email.subject}</h3>
                <p className="mt-10">{email.details}</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
