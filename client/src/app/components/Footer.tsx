import React from "react";
// import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="main-container">
        <div className="text-center">
          &copy; {new Date().getFullYear()} Good Deals List. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
