// components/EmailItem.jsx
import React from "react";

const EmailItem = ({
  email,
  isSelected,
  onSelect,
  onStar,
  onImportant,
  onMarkAsRead,
  onClick,
}) => {
  const handleClick = () => {
    if (email.unread) {
      onMarkAsRead();
    }
    onClick();
  };

  return (
    <div
      className={`flex items-center   p-4 hover:bg-gray-50 cursor-pointer gap-5 ${
        email.unread ? "bg-blue-50" : "bg-white"
      }`}
      onClick={handleClick}
    >
      {/* Checkbox */}
      <div
        className="flex items-center mr-4"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="checkbox"
          size={20}
          checked={isSelected}
          onChange={onSelect}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
      </div>
      <div>
        <p>{email.subject}</p>
      </div>
    </div>
  );
};

export default EmailItem;
