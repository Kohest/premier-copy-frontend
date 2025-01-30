import { useEffect, useRef, useState } from "react";
import CatalogTile from "../shared/ui/catalog-tile";
import FilmSliderSm from "../widgets/film-slider-sm/film-slider-sm";
import CollectionTile from "../shared/ui/collection-tile";
import { Api } from "../shared/api/api";
import { ICollection } from "../entities/collection/types";
import { formatServerUrl } from "../shared/utils/formatServerUrl";
import Loader from "../shared/ui/loader";
import toast from "react-hot-toast";
import SliderSmItemSkeleton from "../shared/ui/skeletons/slider-sm-item-skeleton";
import { useGetSmSliderItems } from "../shared/hooks/useGetSmSliderItems";

const AllPage = () => {
  const [items, setItems] = useState([] as ICollection[]);
  const [offset, setOffset] = useState(0);
  const { loading: sliderLoading, sliderItems } = useGetSmSliderItems({
    count: 5,
  });
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const getCollections = async () => {
    try {
      setLoading(true);
      const data = await Api.collection.getAll({ take: 16, offset: offset });
      if (offset === 0) {
        setItems(data);
      } else {
        setItems((prev) => [...prev, ...data]);
      }
      setHasMore(data.length === 16);
    } catch (error) {
      console.log(error);
      toast.error("Что-то пошло не так", { position: "bottom-right" });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCollections();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setOffset((prev) => prev + 16);
          getCollections();
        }
      },
      { threshold: 0.5 }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore, loading]);
  return (
    <div className="flex-[1_0_auto]">
      <section>
        <section className="pt-[38px] pb-[26px] w-full flex justify-between flex-col main-container">
          <div className="w-full relative">
            <div className="flex w-full gap-4">
              <CatalogTile
                image="https://fb-cdn.premier.one/files/premier/upload/5811/aafd/5811aafdc713c30154ffa4574c93c666_20240118143355_65a90ca3cd442.png?size=470&quality=95"
                title="Фильмы"
                link="/catalog/movies"
              />
              <CatalogTile
                title="Сериалы"
                link="/catalog/series"
                image="https://fb-cdn.premier.one/files/premier/upload/c81e/728d/c81e728d9d4c2f636f067f89cc14862c_20240118143356_65a90ca45eacc.png?size=470&quality=95"
              />
            </div>
          </div>
        </section>
        {sliderLoading ? (
          <div className="flex justify-between main-container">
            {Array.from({ length: 5 }).map((item, index) => (
              <SliderSmItemSkeleton key={index} />
            ))}
          </div>
        ) : (
          <FilmSliderSm
            title="Популярное"
            sliderItems={sliderItems}
            titleLink="/catalog/movies"
          />
        )}
        <section className="mt-4 w-full flex flex-col justify-between main-container">
          <div>
            <h1 className="text-[34px] font-bold">Коллекции</h1>
            <div className="grid grid-cols-4 mt-[44px] gap-[1.5rem_1rem]">
              {items.map((item) => (
                <CollectionTile
                  key={item.id}
                  image={formatServerUrl(item.posterUrl)}
                  link={"/collection/" + item.id}
                />
              ))}
            </div>
            <div ref={observerRef} className="w-full h-[10px]">
              {loading && <Loader />}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AllPage;
