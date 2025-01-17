"use client";

import React, { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import {
  Plus,
  MessageCircle,
  Trash,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { title: "New Chat", icon: <Plus size={20} /> },
    { title: "Chat 1", icon: <MessageCircle size={20} /> },
    { title: "Chat 2", icon: <MessageCircle size={20} /> },
    { title: "Chat 3", icon: <MessageCircle size={20} /> },
  ];

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } h-screen bg-gray-900 text-white flex flex-col transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-primary">Varohi</h1>
        )}
        <button
          className="text-gray-400 hover:text-white"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-grow overflow-auto">
        <ul className="flex flex-col gap-2 p-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
            >
              <div className="text-primary">{item.icon}</div>
              {!isCollapsed && <span>{item.title}</span>}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg">
            <Trash size={20} className="text-red-500" />
            {!isCollapsed && <span>Clear Chats</span>}
          </button>
          <button className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg">
            <LogOut size={20} />
            {!isCollapsed && <span>Sign Out</span>}
          </button>
        </div>
        {!isCollapsed && (
          <div className="mt-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        )}
      </div>
    </div>
  );
}