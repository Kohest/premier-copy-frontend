import React from "react";
import { Link } from "react-router-dom";

const SubscriptionAdvert = () => {
  return (
    <div className="w-full py-[26px]">
      <article
        className="mt-3 py-[25px] px-[32px] bg-[#000] cursor-pointer relative flex justify-center items-center"
        style={{
          boxShadow:
            "0rem .125rem 1.25rem -.125rem #fde204,0rem 0rem 1.25rem -.125rem rgba(255,0,0,.94)",
        }}
      >
        <object
          data="https://fb-cdn.premier.one/files/premier/97c4dcc1/ec93/6498/ec93649851399d07e47b04b24dbe0445.png?quality=90"
          className="absolute h-full object-cover w-full right-0 top-0 "
        ></object>
        <img
          src="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M41.8897%2023.4488C41.7322%2023.0168%2041.3699%2022.5849%2040.8029%2022.2526L9.85103%203.41319C8.29163%202.44962%207%203.23045%207%205.14097V42.8531C7%2044.7636%208.29163%2045.5444%209.85103%2044.5975L40.8186%2025.7414C41.3699%2025.3925%2041.7322%2024.9772%2041.9055%2024.5453C41.9685%2024.3625%2042%2024.1798%2042%2023.997C42%2023.8143%2041.9685%2023.6315%2041.8897%2023.4488Z'%20fill='%23FDDD2D'/%3e%3c/svg%3e"
          alt="play"
          className="mt-3 mr-6 mb-3 ml-3 h-6 w-[22px] z-10"
        />
        <h3 className="text-[26px] font-bold z-10">
          Лучшие российские
          <br />
          сериалы впереди!
        </h3>
        <div className="ml-auto max-w-max w-full z-10">
          <Link
            to="subscriptions"
            className="ml-auto max-w-max w-full rounded-xl gap-2 h-12 py-3 px-[20px] bg-[#fddd2d] text-[#141414] inline-flex justify-center items-center"
          >
            <span className="text-[17px] font-[500]">30 дней за 399₽</span>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default SubscriptionAdvert;
