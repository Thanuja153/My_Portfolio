import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit pt-20    bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-xl mt-10">
          Myself Thanuja! <br />
          <br />
          I am currently pursuing my Master's in Computer Science at Sandiego
          State University, California, US.
          <br />
          <br />
          My love and passion for web technology has started in my Master's
          where I've discovered the joy of building fully functional and
          visually appealing websites through my projects.
          <br />
          <br /> My goal is to collaborate with experienced mentors and talented
          peers to create impactful digital solutions that resonate with users
          and address real-world needs.
          <br />
          <br /> Outside of coding, you can find me trying different recipes ,
          watching movies and discussing tech innovations with fellow
          enthusiasts.
          <br />
          <br /> If you're looking for a motivated and ambitious web developer
          who's ready to embrace new challenges, let's connect!
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
