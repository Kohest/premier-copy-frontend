import { useEffect, useState } from "react";
import HeaderToolbar from "../../features/header-toolbar/header-toolbar";
import ShowThumbnail from "../../widgets/show-thumbnail/show-thumbnail";
import FilmSliderSm from "../../widgets/film-slider-sm/film-slider-sm";
import ShowPageDescription from "./ui/show-page-description";
import SeriesSlider from "../../widgets/series-slider/series-slider";
import { useGetContentById } from "../../shared/hooks/use-content";
import { useParams } from "react-router-dom";
import SeriesSeasons from "./ui/series-seasons";
import Loader from "../../shared/ui/loader";
import { usePlayerStore } from "../../features/video-player/model/store/use-player";
import { Season } from "../../entities/content/types";
import { useProfileStore } from "../../entities/user/store/use-profile";
import NotFound from "../not-found";
import { useGetSmSliderItems } from "../../shared/hooks/useGetSmSliderItems";
import SliderSmItemSkeleton from "../../shared/ui/skeletons/slider-sm-item-skeleton";

const ShowPage = () => {
  const params = useParams();
  const { setShowType, showType } = usePlayerStore();
  const { contentItem, error, loading } = useGetContentById(params.id!);
  const [activeSeason, setActiveSeason] = useState<Season | null>(null);
  const { userData } = useProfileStore();
  const { loading: sliderLoading, sliderItems } = useGetSmSliderItems({
    count: 5,
  });

  useEffect(() => {
    if (contentItem) {
      setActiveSeason(contentItem?.Series?.seasons[0] || null);
      setShowType(contentItem.Series ? "series" : contentItem.Movie && "movie");
    }
  }, [contentItem, setShowType]);
  if ((error && !loading) || (!loading && !contentItem)) {
    return <NotFound />;
  }

  return (
    <>
      <HeaderToolbar />
      <main className="flex-[1_0_auto] -mt-[4.75rem]">
        <div className="w-full flex justify-between">
          {loading || !contentItem ? (
            <Loader />
          ) : (
            <article className="relative overflow-hidden w-full">
              <ShowThumbnail
                {...(contentItem.Movie
                  ? { movieId: contentItem.Movie.id }
                  : {
                      episodeId: contentItem.Series?.seasons[0].episodes[0].id,
                    })}
                showImage={contentItem.posterUrl}
                showDescription={contentItem.description}
                showTitle={contentItem.title}
                showReleaseDate={contentItem.createdAt}
                showSubtitle={`${contentItem.Series?.seasons[0].number} сезон ${contentItem.Series?.seasons[0].episodes[0].number} эпизод`}
                contentId={contentItem.id}
                ageRating={contentItem.ageRating}
                country={contentItem.country}
                genre={contentItem.genres[0]}
                averageRating={contentItem.averageRating._avg.rating}
                releaseYear={contentItem.releaseYear}
                isFree={
                  contentItem.Series
                    ? contentItem.Series.seasons[0].episodes[0].isFree
                    : contentItem.Movie?.isFree
                }
              />
              {contentItem.Series && (
                <section className="relative block main-container">
                  <div className="w-full py-[26px]">
                    <SeriesSeasons
                      activeSeason={activeSeason}
                      seasons={contentItem.Series.seasons}
                      setActiveSeason={setActiveSeason}
                    />
                    <SeriesSlider
                      isAnySubscriptionsAvailable={
                        userData && userData.subscriptions.length ? true : false
                      }
                      activeSeason={activeSeason!}
                      seasons={contentItem.Series.seasons}
                    />
                  </div>
                </section>
              )}
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
              <section className="main-container">
                <ShowPageDescription
                  contentInfo={[
                    {
                      title: "Год выпуска",
                      value: contentItem.releaseYear,
                    },
                    {
                      title: "Страна",
                      value: contentItem.country,
                      className: "w-[calc(100%-154px)]",
                    },
                    {
                      title: "Рейтинг",
                      value: contentItem.ageRating
                        ? `${contentItem.ageRating}+`
                        : "Нет рейтинга",
                    },
                    {
                      title: "Продолжительность",
                      value: contentItem.duration,
                      className: "w-[calc(100%-154px)]",
                    },
                  ]}
                  showType={showType}
                  genres={contentItem.genres}
                  showDescription={contentItem.description}
                />
              </section>
            </article>
          )}
        </div>
      </main>
    </>
  );
};

export default ShowPage;
