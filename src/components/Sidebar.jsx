// components/Sidebar.jsx
import React from 'react';
import { FaInbox } from 'react-icons/fa';
import { FaBoxArchive } from 'react-icons/fa6';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigation = [
    { name: 'Inbox', icon: <FaInbox />,  current: true },
    { name: 'Archive', icon: <FaBoxArchive />,  current: false },
  ];


  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 flex z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        </div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 flex flex-col w-64 bg-white border-r border-gray-200 
        transform transition duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:inset-0
      `}>
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">


          <div className='text-xl font-bold mx-auto'>Logo</div>
          <button 
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>


  
        <nav className="flex-1 px-4 py-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center px-3 py-2 text-sm rounded-full font-medium  transition duration-200 ${
                item.current
                  ? 'bg-[#D6E2FB] text-black'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              <span className="flex-1">{item.name}</span>
              {item.count > 0 && (
                <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${
                  item.current ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'
                }`}>
                  {item.count}
                </span>
              )}
            </a>
          ))}
        </nav>

        

        {/* Logout */}
        <div className="flex items-center p-4 border-t border-gray-200">
          <div className="ml-3">
            <p className="text-xl cursor-pointer font-medium text-gray-700">Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;