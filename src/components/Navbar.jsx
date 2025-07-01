import { useState } from "react";
import { navLists } from "../constants";
import UploadModal from "./UploadModel";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 z-50 bg-white">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-black font-bold text-lg">
            <i className="fa-regular fa-snowflake text-blue-500"></i>
            <span>Designify</span>
          </div>
          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            {navLists.map((nav) => (
              <div key={nav} className="hover:text-blue-500 cursor-pointer">
                {nav}
              </div>
            ))}
          </div>
          <div>
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
              onClick={() => setShowModal(true)}
            >
              Get Started
            </button>
          </div>
        </nav>
      </header>
      <UploadModal isOpen={showModal} onClose={() => setShowModal(false)} sketchImageUrl="" />
    </>
  );
};

export default Navbar;
