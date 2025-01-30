import React, { useEffect, useMemo, useRef, useState } from "react";
import MainTitle from "../shared/ui/MainTitle";
import Filters from "../features/filters/filters";
import FilmSliderSmItem from "../widgets/film-slider-sm/ui/film-slider-sm-item";
import { formatServerUrl } from "../shared/utils/formatServerUrl";
import { IContentItem } from "../entities/content/types";
import { Api } from "../shared/api/api";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { filterContent } from "../shared/lib/filter-content";
import NotFound from "./not-found";

const ContentPage = () => {
  const { type } = useParams();
  const [content, setContent] = useState<IContentItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const uniqueYearsRef = useRef<string[]>([]);
  useEffect(() => {
    const getCollectionContent = async () => {
      try {
        setLoading(true);

        const data = await Api.content.getContent({
          count: 36,
          type: type === "movies" ? "movie" : "series",
        });
        if (!data) {
          navigate("/");
        } else {
          setContent(data);
          const uniqueYears = Array.from(
            new Set(data.map((item) => item.releaseYear.toString()))
          ).filter(Boolean);
          uniqueYearsRef.current = uniqueYears;
        }
      } catch (error) {
        console.error("Ошибка загрузки коллекции:", error);
      } finally {
        setLoading(false);
      }
    };
    getCollectionContent();
  }, [type, navigate]);
  const filteredContent = useMemo(() => {
    if (!content) return [];
    //@ts-ignore
    return filterContent(content, searchParams);
  }, [content, searchParams]);
  if (!content && !loading) {
    return <NotFound />;
  }
  return (
    <div className="main-container w-full py-[26px]">
      <header className="mb-[2.5rem] max-w-[52rem] ">
        <MainTitle
          text={
            type === "movies"
              ? "Фильмы смотреть онлайн"
              : "Сериалы смотреть онлайн"
          }
          size="xl"
        />
      </header>
      <Filters yearsFilterOptions={uniqueYearsRef.current} />
      {filteredContent.length > 0 ? (
        <section className="min-h-[480px] grid grid-cols-4 gap-y-[10px] gap-x-[16px] mb-[36px] mt-[36px]">
          {filteredContent.map((item) => (
            <FilmSliderSmItem
              age={item.ageRating}
              id={item.id}
              image={formatServerUrl(item.posterUrl)}
              title={item.title}
              key={item.id}
              score={item.averageRating._avg.rating}
              type="horizontal"
            />
          ))}
        </section>
      ) : (
        <div className="mt-[3rem] text-[#bdbdbd] text-center text-[20px] pointer-events-none  select-none">
          Ничего не нашлось, попробуйте изменить фильтры
        </div>
      )}
    </div>
  );
};

export default ContentPage;
