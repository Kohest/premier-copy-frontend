import { Bookmark } from "lucide-react";
import React from "react";

const EmptyFavorite = () => {
  return (
    <div className="mt-[44px] mb-10 text-center">
      <h3 className="text-[#ececec] mb-4 leading-[26px] text-[20px] font-[600]">
        Держите под рукой все, что хотите посмотреть{" "}
      </h3>
      <div className="mb-10 text-[16px]">
        Добавляйте фильмы и сериалы с помощью кнопки{" "}
        <div className="font-[500] inline-flex justify-center items-center bg-[#292929] backdrop-blur-[2px] mx-[5px] h-[28px] w-[28px] rounded-[8px]">
          <Bookmark size={16} />
        </div>
        «В избранное».
      </div>
    </div>
  );
};

export default EmptyFavorite;
