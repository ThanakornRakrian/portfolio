import React from "react";

const Navbar = () => {
  return (
    <ul className="flex justify-end gap-6 py-4 px-10 bg-[#3C3633] text-white items-center">
      <li className="uppercase mr-auto">thanakorn rakrian</li>
      {/* <li>Project</li>
      <li>About</li>
      <li>Contact</li> */}
      <div className=" font-semibold">
        <p>rakrian.thanakorn@gmail.com</p>
      </div>
      <a
        href="https://drive.google.com/file/d/1S_v2ExAnToSe-XtJvmgliEh2-HSb7zn3/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className=" btn btn-sm">resume</button>
      </a>
    </ul>
  );
};

export default Navbar;
