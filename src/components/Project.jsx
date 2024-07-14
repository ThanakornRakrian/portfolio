import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="py-4  w-3/4">
      <div
        data-aos="fade-up"
        className=" flex w-full bg-[#EEEDEB] rounded-lg p-4"
      >
        <div className="flex flex-col w-[40%] pt-8">
          <img
            src="./images/kick-it-up.JPG"
            alt=""
            className=" w-full h-44 self-center"
          />
          <div className="flex justify-around pt-4 items-center h-full">
            <a href="https://kick-it-up.vercel.app/" target="_blank">
              <button className="px-4 py-1 rounded-lg bg-[#747264] text-white text-sm">
                Visit Website
              </button>
            </a>
            <a
              href="https://github.com/jsd7-group7-fremen/group7-fremen-fontend"
              target="_blank"
            >
              <button className="px-4 py-1 rounded-lg bg-[#747264] text-white text-sm">
                See the code
              </button>
            </a>
          </div>
        </div>
        <div className=" w-full p-8">
          <h1 className="pb-2 font-semibold">
            Fermen Shoe Shop (MERN Stack CRUD E-commerce Web Application)
          </h1>
          <p className="pl-4">
            Created user personas and wireframes using Figma <br />
            Managed UI components with React <br />
            Navigated between pages using React Router DOM <br />
            Made HTTP requests to the back end using Axios <br />
            Handled RESTful APIs, including authentication and error handling,
            with Express <br />
            Hashed passwords using bcrypt <br />
            Ensured secure token transmission to users using JWT (JSON Web
            Tokens) <br />
            Connected to and managed MongoDB using Mongoose
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
