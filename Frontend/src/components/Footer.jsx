import React from "react";
import {assets} from "../assets/assets_frontend/assets"

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm text-center sm:text-left items-center sm:items-start">
        {/* left */}
        <div>
        {/* logo img */}
        <img className="mx-auto sm:mx-0 mb-5 w-40" src={assets.logo}  />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi qui
            consequatur earum distinctio quam similique magni, corporis
            consequuntur fugit cupiditate iure quibusdam esse ab veniam?
            Deserunt ipsa beatae aperiam labore!
          </p>
        </div>
        {/* center */}
        <div>
          <h3 className="text-xl font-medium mb-5 text-cyan-600">COMPANY</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right */}
        <div>
          <h3 className="text-xl font-medium mb-5 text-cyan-600">GET IN TOUCH</h3>
          <ul className="flex flex-col text-gray-600 gap-2">
            <li>+92 0345789014</li>
            <li>demo@developerquratulain.com</li>
          </ul>
        </div>
      </div>
      {/* copyright content */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-cyan-600">
          Copyright 2025 DeveloperQuratulain - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
