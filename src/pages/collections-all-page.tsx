import React, { useEffect, useRef, useState } from "react";
import CollectionTile from "../shared/ui/collection-tile";
import { Api } from "../shared/api/api";
import { ICollection } from "../entities/collection/types";
import { formatServerUrl } from "../shared/utils/formatServerUrl";
import Loader from "../shared/ui/loader";
import toast from "react-hot-toast";

const CollectionsAllPage = () => {
  const [items, setItems] = useState([] as ICollection[]);
  const [offset, setOffset] = useState(0);
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
      toast.error("Что-то пошло не так", { position: "bottom-right" });
      console.log(error);
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
        <section className="mt-4 w-full flex flex-col justify-between main-container">
          <div>
            <h1 className="text-[34px] font-bold">Коллекции</h1>
            <div className="grid grid-cols-3 mt-[44px] gap-[1.5rem_1rem]">
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

export default CollectionsAllPage;
