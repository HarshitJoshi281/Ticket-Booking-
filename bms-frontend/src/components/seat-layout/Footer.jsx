import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-xs font-bold text-purple-600 tracking-wider">
          SCREEN THIS WAY
        </p>
        
        <div className="flex gap-4 text-xs mt-3">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 border rounded-[4px]"></div>
            <p>Available</p>
          </div>

          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-gray-200 border rounded-[4px] flex items-center justify-center">
              <small className="-mt-1">x</small>
            </div>
            Occupied
          </div>

          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-purple-600 rounded-[4px]"></div>
            Selected
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

