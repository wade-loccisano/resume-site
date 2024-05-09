'use client';

import React from 'react';

export default function ThemeSelector() {
  const themes = [
    "Light", "Dark", "System"
  ];
  const [open, setOpen] = React.useState(false);

  const openThemeSelect = (open: boolean) => {
    setOpen(open);
    console.log('clicked ', open);
  }
  return (
    <div className='flex flex-col'>
      <button
        className="text-center min-w-[90px]"
        onClick={() => openThemeSelect(!open)}
      >
        Theme
      </button>
      <div className="">
        {open && (
          <div className="fixed inset-x-0 inset-y-0 flex flex-col z-10 shadow-md rounded-md bg-white">
            <div className="px-4 py-2">
              <div className="">
                Light
              </div>
            </div>
            <div className="px-4 py-2">Dark</div>
            {/* <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-200">System</a> */}
          </div>
        )}
      </div>
    </div>
  );
}