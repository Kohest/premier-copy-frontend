import React, { FC } from "react";
import HeaderModalItem from "./header-modal-item";

const HeaderModal: FC = () => {
  return (
    <div className="absolute bg-[#1a1a1a] rounded-xl flex z-[10] -left-2 top-[calc(100%+10px)] w-[200px] before:bottom-full before:left-0 before:absolute before:w-full before:h-[10px]">
      <div className=" flex flex-col py-4 w-full">
        <HeaderModalItem href="catalog/movies" title="Фильмы" />
        <HeaderModalItem href="catalog/series" title="Сериалы" />
        <HeaderModalItem href="/collections-all" title="Колллекции" />
      </div>
    </div>
  );
};

export default HeaderModal;
