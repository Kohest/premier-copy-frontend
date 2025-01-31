import React, { FC } from "react";
import SendReview from "../../../features/send-review/send-review";
import SetFavorite from "../../../features/set-favorite/set-favorite";
import WatchContentButton from "../../../features/watch-content-button/watch-content-button";
import WatchTrailerButton from "../../../features/watch-trailer-button/watch-trailer-button";
import { Season } from "../../../entities/content/types";
interface Props {
  showTitle: string;
  showSubtitle?: string;
  episodeId?: string;
  isFree: boolean;
  movieId?: string;
  contentId: string;
}
const ThumbnailActions: FC<Props> = ({
  showTitle,
  showSubtitle,
  episodeId,
  contentId,
  isFree,
  movieId,
}) => {
  return (
    <div className="mb-3 min-w-full relative">
      <div className="absolute top-0 right-0 "></div>
      <div className="flex justify-start">
        <div className="flex w-auto">
          <WatchContentButton
            isFree={isFree}
            movieId={movieId}
            episodeId={episodeId}
            showTitle={showTitle}
            showSubtitle={showSubtitle}
          />
          <WatchTrailerButton showTitle={showTitle} contentId={contentId} />
          <SetFavorite contentId={contentId} />
          <SendReview contentId={contentId} />
        </div>
      </div>
    </div>
  );
};

export default ThumbnailActions;
