import React from "react";
import { Link } from "react-router-dom";

const LogoItem = () => {
  return (
    <Link to={"/"} className="flex items-center">
      <img
        src="https://premier.one/_nuxt/premier-logo.bkJfLUwa.svg"
        alt="Логотип Premier"
        className="mr-[2rem] h-[1.5rem] w-[7.875rem]"
      />
    </Link>
  );
};

export default LogoItem;
