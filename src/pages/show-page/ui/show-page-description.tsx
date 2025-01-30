import React, { FC } from "react";
import { Genre } from "../../../entities/content/types";
import ShowPageDescriptionItem from "./show-page-description-item";
import { translateGenres } from "../../../shared/utils/translateGenres";
interface Props {
  showType: "series" | "movie" | "trailer";
  showDescription: string;
  contentInfo?: {
    title: string;
    value: string | number | null | undefined;
    className?: string;
  }[];
  genres?: Genre[];
}
const ShowPageDescription: FC<Props> = ({
  showType,
  showDescription,
  genres,
  contentInfo,
}) => {
  return (
    <div className="w-full py-[26px]">
      <h2 className="mb-6 text-[26px] font-[500]">
        Информация о {showType === "series" ? "сериале" : "фильме"}
      </h2>
      <div>
        <div className="mb-6 w-full max-w-[848px] text-[16px]">
          <h3 className="text-[#8a8a8a] mb-1">Сюжет</h3>
          <div className="">{showDescription}</div>
        </div>
        <div className="flex text-[16px] font-[500] flex-wrap">
          {contentInfo &&
            contentInfo.map((item, index) => (
              <ShowPageDescriptionItem
                key={index}
                title={item.title}
                subtitle={`${item.value || "Нет информации"}`}
                className={item.className}
              />
            ))}
          {genres && genres.length > 0 && (
            <ShowPageDescriptionItem
              subtitle={translateGenres(genres)
                .map((genre) => genre)
                .join(", ")}
              title="Жанры"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowPageDescription;
