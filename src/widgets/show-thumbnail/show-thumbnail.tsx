import React, { FC } from "react";
import ThumbnailDescription from "./ui/thumbnail-description";
import ThumbnailImage from "./ui/thubmnail-image";
import ThumbnailActions from "./ui/thumbnail-actions";
import ThumbnailShowGenres from "./ui/thumbnail-show-genres";
import ThumbnailShowScore from "./ui/thumbnail-show-score";
import { Genre, Season } from "../../entities/content/types";
interface Props {
  showTitle: string;
  showLogo?: string;
  showDescription: string;
  showImage: string;
  ageRating?: string;
  showSubtitle?: string;
  country?: string;
  seasonsCount?: string;
  genre?: Genre;
  isFree: boolean;
  releaseYear?: string;
  showReleaseDate: Date;
  movieId?: string;
  averageRating?: number;
  contentId: string;
  episodeId?: string;
}

const ShowThumbnail: FC<Props> = ({
  showImage,
  ageRating,
  showDescription,

  showLogo,
  showSubtitle,
  contentId,
  averageRating,
  showReleaseDate,
  episodeId,
  movieId,
  country,
  isFree,
  genre,
  releaseYear,
  seasonsCount,
  showTitle,
}) => {
  const isShowNew = (showReleaseDate: Date | string): boolean => {
    const releaseDate =
      typeof showReleaseDate === "string"
        ? new Date(showReleaseDate)
        : showReleaseDate;
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - releaseDate.getTime();
    const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
    return timeDifference <= thirtyDaysInMs;
  };
  return (
    <div className="mb-5">
      <div className="relative">
        <ThumbnailImage thumbnailImage={showImage} />
        <div className="bottom-0 mt-0 absolute w-full z-10 flex justify-end min-h-[220px]">
          <div className="main-container w-full max-w-none">
            <div className="w-full inline-flex items-start flex-col">
              {isShowNew(showReleaseDate) && (
                <div className="mb-[20px] relative">
                  <div className="bg-[#fddd2d] rounded-md text-[#141414] flex items-center h-6 px-2 min-h-6 w-auto">
                    <span className="text-[14px] font-bold">Новинка</span>
                  </div>
                </div>
              )}
              <div className="mb-6">
                {showLogo ? (
                  <img
                    src="https://pic.uma.media/cwebp/pic/cardimage/74/d8/74d854e9c8e987921eb0052bcd530c07.png?size=346&quality=90"
                    alt="name"
                    className="block max-h-[10rem] max-w-[26.25rem]"
                  />
                ) : (
                  showTitle && (
                    <span className="uppercase block max-h-[10rem] max-w-[46.25rem] font-bold text-[60px] pointer-events-none w-full">
                      {showTitle}
                    </span>
                  )
                )}
              </div>
              {averageRating && averageRating > 0 && (
                <ThumbnailShowScore averageRating={averageRating} />
              )}
              <ThumbnailShowGenres
                ageRating={ageRating}
                country={country}
                genre={genre}
                releaseYear={releaseYear}
                seasonsCount={seasonsCount}
              />
              <ThumbnailActions
                isFree={isFree}
                showSubtitle={showSubtitle}
                contentId={contentId}
                episodeId={episodeId}
                movieId={movieId}
                showTitle={showTitle}
              />
            </div>
          </div>
        </div>
      </div>
      <ThumbnailDescription
        showDescription={showDescription}
        showTitle={showTitle}
      />
    </div>
  );
};

export default ShowThumbnail;
