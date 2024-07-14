import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-in" className=" bg-[#EEEDEB] w-9/12 rounded-lg p-4">
      <div className="flex justify-start gap-10 items-center">
        <div>
          <h1 className="text-2xl">Education</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/2/25/Chiang_mai_university_logo.png"
            alt=""
            className=" rounded-lg pt-2"
            width="120px"
          />
        </div>
        <div>
          <p>2015 - 2019</p>
          <p>Bechelor of Engineering</p>
          <p>Chiang Mai University</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
