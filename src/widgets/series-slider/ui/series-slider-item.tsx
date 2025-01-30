import React, { FC, useState } from "react";
import { cn } from "../../../shared/utils/cnUtil";
import { usePlayerStore } from "../../../features/video-player/model/store/use-player";
import { usePlayerModalStore } from "../../../shared/store/use-player-modal";
import { Api } from "../../../shared/api/api";
import { Season } from "../../../entities/content/types";
import toast from "react-hot-toast";
import BuySubscriptionModal from "../../buy-subscription-modal/buy-subscription-modal";
interface Props {
  id: string;
  image: string;
  title: string;
  description: string;
  duration: string;
  seasonNumber: string;
  episodeNumber: string;
  isFree: boolean;
  seasons: Season[];
  isAnySubscriptionsAvailable: boolean;
}
const SeriesSliderItem: FC<Props> = ({
  description,
  duration,
  id,
  seasonNumber,
  isAnySubscriptionsAvailable,
  episodeNumber,
  seasons,
  image,
  isFree,
  title,
}) => {
  const [showMore, setShowMore] = useState(false);
  const {
    setTitle,
    setSubtitle,
    setShowType,
    setQuality,
    setSeasons,
    setQualityOptions,
    setActiveVideo,
  } = usePlayerStore();
  const { toggleModal } = usePlayerModalStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckSubscriptions = async () => {
    if (isFree || isAnySubscriptionsAvailable) {
      await handleOpenEpisode();
    } else {
      setIsModalOpen(true);
    }
  };
  const handleOpenEpisode = async () => {
    try {
      setTitle(title);
      setSubtitle(`сезон ${seasonNumber} эпизод ${episodeNumber}`);
      setShowType("series");
      toggleModal(true);
      const qualities = await Api.series.getEpisodeQualities(id);
      setQualityOptions(qualities);
      setQuality(qualities[0].qualityName);
      setActiveVideo(id);
      setSeasons(seasons);
    } catch (error) {
      toast.error("Something wrong happened", { position: "bottom-right" });
    }
  };
  return (
    <>
      {isModalOpen && <BuySubscriptionModal setIsModalOpen={setIsModalOpen} />}
      <div className="w-[304px] mr-4">
        <div
          className="max-w-[408px] h-fit w-full relative"
          onClick={handleCheckSubscriptions}
        >
          <div className="pt-[56.25%] cursor-pointer relative">
            <figure
              className="block h-full absolute overflow-hidden top-0 left-0 bg-[#161616]
            w-full after:absolute after:w-full after:opacity-75 after:h-[70%]
            after:bottom-0 after:bg-[linear-gradient(180deg,hsla(0,0%,8%,0),#141414)] z-10"
            >
              <picture className="contents">
                <img
                  src={image}
                  alt={title}
                  className="block h-full object-cover w-full absolute"
                />
              </picture>
            </figure>
            <div className="z-10 font-bold px-4 pb-4 absolute bottom-0 left-0 w-full">
              <div className="text-[14px] mb-1 text-right">{duration}</div>
            </div>
          </div>
          <div className="relative z-10">
            <div className="mt-[20px] mb-1 text-[20px] font-[600] ">
              {title}
            </div>
            {isFree && (
              <div className="absolute text-[#01c243] text-[16px] top-1 right-0">
                Бесплатно
              </div>
            )}
            <div
              className={cn(
                "text-[#bdbdbd] text-[16px] max-h-[72px]  line-clamp-3 overflow-hidden",
                showMore && "overflow-visible"
              )}
            >
              <span className="overflow-hidden">{description}</span>
            </div>
            <span
              className={cn(
                "text-[#8a8a8a] cursor-pointer opacity-100 hover:text-[#fff] transition",
                showMore && "opacity-0  cursor-default"
              )}
              onClick={() => setShowMore(!showMore)}
            >
              ...&nbsp;еще
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeriesSliderItem;
