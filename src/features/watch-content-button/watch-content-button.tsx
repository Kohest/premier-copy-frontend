import React, { FC, useState } from "react";
import ContentInteractionButton from "../../shared/ui/cotnent-interaction-button/content-interaction-button";
import { Api } from "../../shared/api/api";
import { usePlayerStore } from "../video-player/model/store/use-player";
import toast from "react-hot-toast";
import { usePlayerModalStore } from "../../shared/store/use-player-modal";
import { FaPlay } from "react-icons/fa";
import { useProfileStore } from "../../entities/user/store/use-profile";
import BuySubscriptionModal from "../../widgets/buy-subscription-modal/buy-subscription-modal";
interface Props {
  movieId?: string;
  episodeId?: string;
  isFree: boolean;
  showTitle: string;
  showSubtitle?: string;
}
const WatchContentButton: FC<Props> = ({
  movieId,
  episodeId,
  showTitle,
  showSubtitle,
  isFree,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toggleModal } = usePlayerModalStore();
  const { userData } = useProfileStore();
  const {
    setTitle,
    setSubtitle,
    setShowType,
    showType,
    setActiveVideo,
    setQualityOptions,
    setQuality,
  } = usePlayerStore();
  const handleOpenVideo = async () => {
    if (isFree || (userData && userData.subscriptions.length > 0)) {
      try {
        showType === "series" && episodeId
          ? setActiveVideo(episodeId)
          : movieId && setActiveVideo(movieId);

        const qualities =
          showType === "movie"
            ? await Api.movie.getMovieQualities(movieId!)
            : await Api.series.getEpisodeQualities(episodeId!);
        setQualityOptions(qualities);
        setQuality(qualities[0].qualityName);
        setActiveVideo(showType === "movie" ? movieId! : episodeId!);
      } catch (error) {
        console.log(error);
        toast.error("Сервер недоступен", {
          position: "bottom-right",
        });
      }
      toggleModal(true);
      setTitle(showTitle);
      showType === "series" && setSubtitle(showSubtitle || "");
      setShowType(showType);
    } else {
      setIsModalOpen(true);
    }
  };
  return (
    <>
      {isModalOpen && <BuySubscriptionModal setIsModalOpen={setIsModalOpen} />}
      <ContentInteractionButton
        type="primary"
        Icon={<FaPlay fill="#141414" />}
        onClick={handleOpenVideo}
        text="Начать просмотр"
      />
    </>
  );
};

export default WatchContentButton;
