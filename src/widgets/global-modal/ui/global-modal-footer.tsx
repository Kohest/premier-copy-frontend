import React from "react";
import { Link } from "react-router-dom";

const GlobalModalFooter = () => {
  return (
    <p className="text-[#8c8c8c] text-[14px] max-w-[349px] mx-auto text-center">
      Нажимая «Продолжить», я принимаю условия
      <Link to="/" className="text-[#fddd2d] ">
        {" "}
        Пользовательского соглашения{" "}
      </Link>{" "}
      ООО «ПРЕМЬЕР»
    </p>
  );
};

export default GlobalModalFooter;
