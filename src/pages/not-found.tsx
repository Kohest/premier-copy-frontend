import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="main-container mt-[42px]">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="mb-[20px] text-[#ececec] text-[34px] font-bold">
              Здесь ничего нет
            </h1>
            <p className="mb-[44px] text-[#8a8a8a] text-[20px]">
              Переходите на главную — там вас ждёт много интересного
            </p>
          </div>
          <img
            src="https://premier.one/_nuxt/error.CaD8bBL_.png"
            alt="Not found"
            className="max-w-[353px] mb-[44px] w-full inline-block"
          />
          <div className="flex justify-center w-full items-center flex-col">
            <Link
              to={"/"}
              className="mb-3 max-w-[290px] w-full rounded-xl gap-2 h-12 py-3 px-[20px] bg-[#fddd2d] text-[#141414] flex items-center justify-center"
            >
              <span className="text-[17px] font-[500]">На главную</span>
            </Link>
            <button className="max-w-[290px] w-full rounded-xl gap-2 h-12 py-3 px-[20px] bg-transparent flex items-center justify-center">
              <span className="text-[17px] font-[500] text-[#ececec]">
                Написать в поддержку
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
