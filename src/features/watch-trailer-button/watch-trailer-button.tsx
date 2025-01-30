import React, { FC } from "react";
import ContentInteractionButton from "../../shared/ui/cotnent-interaction-button/content-interaction-button";
import { Video } from "lucide-react";
import { usePlayerModalStore } from "../../shared/store/use-player-modal";
import { usePlayerStore } from "../video-player/model/store/use-player";
import { Api } from "../../shared/api/api";
import toast from "react-hot-toast";
interface Props {
  showTitle: string;
  contentId: string;
}
const WatchTrailerButton: FC<Props> = ({ showTitle, contentId }) => {
  const { toggleModal } = usePlayerModalStore();
  const {
    setTitle,
    setShowType,
    setActiveVideo,
    setQuality,
    setQualityOptions,
  } = usePlayerStore();
  const handleOpenTrailer = async () => {
    try {
      toggleModal(true);
      setTitle(showTitle);
      setShowType("trailer");
      const qualities = await Api.trailer.getTrailerQualities(contentId);
      setQuality(qualities[0].qualityName);
      setQualityOptions(qualities);
      setActiveVideo(contentId);
    } catch (error) {
      toast.error("Что-то пошло не так", { position: "bottom-right" });
    }
  };
  return (
    <ContentInteractionButton
      Icon={<Video />}
      onClick={handleOpenTrailer}
      text="Трейлер"
      tooltipText="Смотреть трейлер"
    />
  );
};

export default WatchTrailerButton;
