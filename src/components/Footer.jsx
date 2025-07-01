import { navLists } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-4 border-t border-gray-300">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-4">

        <div className="flex items-center gap-2 text-black font-bold text-xl">
            <i className="fa-regular fa-snowflake text-blue-500"></i>
            <span>Designify</span>
        </div>

        <p className="text-gray-600 text-sm max-w-md">
            Transform your photos into stunning pencil sketches using AI.
        </p>

        <div className="flex gap-6 text-gray-700 font-medium">
            {navLists.map((nav) => (
            <span
                key={nav}
                className="hover:text-blue-500 cursor-pointer transition"
            >
                {nav}
            </span>
            ))}
        </div>
    </div>

    <div className="text-center mt-6 text-xs text-gray-500 border-t border-gray-300 pt-4">
        &copy; {new Date().getFullYear()} Designify. All rights reserved.
    </div>
    </footer>
    );
};

export default Footer;
