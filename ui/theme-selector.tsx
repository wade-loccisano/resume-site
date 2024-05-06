'use client';

import React from 'react';

export default function ThemeSelector() {
  const themes = [
    "Light", "Dark", "System"
  ];
  const [open, setOpen] = React.useState(false);

  const openThemeSelect = (open) => {
    setOpen(open);
    console.log('clicked ', open);
  }
  return (
    <button
      className="relative text-center"
      onClick={() => openThemeSelect(!open)}
    >
      <div className="min-w-[90px]">
        Theme
      </div>
      {open && (
        <div className="flex flex-col absolute  left-0 right-0 z-10 mt-2 shadow-md rounded-md py-2">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Light</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dark</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">System</a>
        </div>
      )}
    </button>
  );
}
