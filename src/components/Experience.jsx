import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className=" bg-[#EEEDEB] w-9/12 rounded-lg p-4 mb-4 mt-4"
    >
      <h1 className="text-2xl">Experience</h1>
      <div className="flex flex-col justify-start gap-10 items-center">
        <div className="flex justify-start gap-10 items-center">
          <div>
            <img
              src="https://thailand.generation.org/wp-content/uploads/2023/08/Generation-Thai-Logo.png"
              alt=""
              className=" rounded-lg pt-2"
              width="200px"
            />
          </div>
          <div className=" w-8/12 pl-8">
            <p className=" font-semibold">APR 2024 - JULY 2024</p>
            <p className=" font-semibold">Junior Software Developer Bootcamp</p>
            <ul className=" list-disc">
              <li>
                Acquired hands-on experience in building web applications using
                the MERN stack, which includes React for the front end, Express
                for the back end, and MongoDB for the database. Additionally,
                possesses a solid understanding of the software development life
                cycle.
              </li>
              <li>
                Led Fermen Shoe Shop project, working collaboratively in a team
                under guidance of tech mentors, utilizing Scrum Agile framework
                enhanced skills in communication, teamwork, growth mindset, and
                project management.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-start gap-10 items-center">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWiUTZ5SBrJMOBSRWLbDWTG4l4NV6MHIeIOQ&s"
              alt=""
              className=" rounded-lg pt-2"
              width="200px"
            />
          </div>
          <div className=" w-8/12 pl-8">
            <p className=" font-semibold">FEB 2022 - MAY 2023</p>
            <p className=" font-semibold">RPA Developer</p>
            <ul className=" list-disc">
              <li>
                Developed and implemented RPA solutions using tools Automation
                Anywhere to automate repetitive tasks and streamline business
                processes
              </li>
              <li>
                Developed comprehensive test scenarios and scripts for User
                Acceptance Testing (UAT), ensuring the robustness and
                reliability of automated solutions
              </li>
              <li>
                Collaborated with cross-functional teams to gather requirements,
                analyze processes, and design automation workflows tailored to
                specific business needs.
              </li>
              <li>
                Provided ongoing maintenance and support for deployed bots,
                including troubleshooting and implementing enhancements to
                optimize performance.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-start gap-10 items-center">
          <div>
            <img
              src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/358683959_737061011762562_9042770360452925336_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=yQf99GzDhdMQ7kNvgHwJrlC&_nc_ht=scontent.fbkk5-5.fna&oh=00_AYA8nPJr6a4maNCQGGBwpRE4vZu3n_Z2g9ke7F0rRgKUAQ&oe=66994B26"
              alt=""
              className=" rounded-lg pt-2"
              width="200px"
            />
          </div>
          <div className=" w-8/12 pl-8">
            <p className=" font-semibold">NOV 2021 – JAN 2022</p>
            <p className=" font-semibold">Site engineer</p>
            <ul className=" list-disc">
              <li>
                Collaborated with architects, contractors, and project managers
                in planning, ensuring compliance with codes and safety
                standards.
              </li>
              <li>
                Resolved on-site issues and logistical challenges to maintain
                project progress.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
