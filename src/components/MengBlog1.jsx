import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const MengBlog1 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex justify-center gap-10 items-center bg-[#EEEDEB] ">
      <div data-aos="fade-right" className=" w-4/12">
        <h1 className=" items-center text-white font-bold text-2xl px-3 py-1 bg-[#747264] ">
          Hi, I'm Meng
        </h1>
        <p>
          {" "}
          Recent Generation bootcamp graduate skilled in JavaScript, driven by a
          growth mindset and a passion for full-stack development. Eager to
          contribute to innovative projects with a strong commitment to learning
          and excellence. Ready to apply my technical skills and enthusiasm to
          deliver high-quality solutions.
        </p>
        <div className=" py-4 mt-2 flex gap-7">
          <a href="https://github.com/ThanakornRakrian" target="_blank">
            <img src="./svg/github-mark.svg" alt="" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/thanakorn-rakrian/"
            target="_blank"
          >
            <img src="./svg/linkedin-3.svg" alt="" width="40px" />
          </a>
        </div>
      </div>
      <div data-aos="fade-left" className=" w-3/12 flex justify-center">
        <img src="./images/Meng2-1.png" alt="" />
      </div>
    </div>
  );
};

export default MengBlog1;
