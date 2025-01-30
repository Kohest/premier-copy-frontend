import React, { useEffect, useState, useMemo, useRef } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Api } from "../shared/api/api";
import { ICollectionWithContent } from "../entities/collection/types";
import Filters from "../features/filters/filters";
import MainTitle from "../shared/ui/MainTitle";
import FilmSliderSmItem from "../widgets/film-slider-sm/ui/film-slider-sm-item";
import { formatServerUrl } from "../shared/utils/formatServerUrl";
import { filterContent } from "../shared/lib/filter-content";
import Loader from "../shared/ui/loader";
import NotFound from "./not-found";
const CollectionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [collection, setCollection] = useState<ICollectionWithContent | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const uniqueYearsRef = useRef<string[]>([]);
  useEffect(() => {
    const getCollectionContent = async () => {
      try {
        setLoading(true);
        if (id) {
          const data = await Api.collection.getCollectionContent(id);
          if (!data) {
            navigate("/");
          } else {
            setCollection(data);
            if (data.contents) {
              const uniqueYears = Array.from(
                new Set(data.contents.map((item) => item.releaseYear))
              ).filter(Boolean);
              uniqueYearsRef.current = uniqueYears;
            }
          }
        }
      } catch (error) {
        console.error("Ошибка загрузки коллекции:", error);
      } finally {
        setLoading(false);
      }
    };
    getCollectionContent();
  }, [id, navigate]);
  const filteredContent = useMemo(() => {
    if (!collection?.contents) return [];
    return filterContent(collection.contents, searchParams);
  }, [collection?.contents, searchParams]);
  if (!collection && !loading) {
    return <NotFound />;
  }
  return (
    <div className="main-container w-full py-[26px]">
      <header className="mb-[2.5rem] max-w-[52rem] ">
        {loading ? (
          <Loader />
        ) : (
          <>
            <MainTitle text={collection!.name} size="xl" />
            <p className="mt-[.75rem] text-[#8c8c8c] text-[16px] leading-[24px]">
              {collection!.description}
            </p>
          </>
        )}
      </header>
      <Filters yearsFilterOptions={uniqueYearsRef.current} />
      {filteredContent.length > 0 && !loading ? (
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

export default CollectionPage;
