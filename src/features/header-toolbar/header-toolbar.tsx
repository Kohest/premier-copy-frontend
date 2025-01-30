import React from "react";
import HeaderToolbarItem from "./ui/header-toolbar-item";

const HeaderToolbar = () => {
  return (
    <div className="z-[5] w-full flex justify-center items-center">
      <div className="mt-mx-auto mt-4">
        <div className="flex p-1 rounded-xl bg-[rgba(48,48,48,.5)]">
          <HeaderToolbarItem
            link="/collection/dsvcx23fddsfsdffdew93"
            title="Лучшие драмы"
          />
          <HeaderToolbarItem
            link="/collection/cm5asdsa20asdasddew93"
            title="Мультфильмы"
          />
          <HeaderToolbarItem link="/series" title="Сериалы" />
          <HeaderToolbarItem
            link="/collection/234pv0tr30000d4zrkzfasdaw93"
            title="Сделано PREMIER"
          />
          <HeaderToolbarItem
            link="/collection/21dav0sda0d4zrkzfasdaw93"
            title="Триллеры"
          />
          <HeaderToolbarItem
            link="/collection/cm5xcvxd4zrkzfdew93"
            title="Комедии"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderToolbar;
