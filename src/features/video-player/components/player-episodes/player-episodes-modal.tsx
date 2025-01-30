import React, { FC, SetStateAction, useEffect, useMemo, useState } from "react";
import PlayerEpisodesModalHeader from "./player-episodes-modal-header";
import PlayerEpisodesModalItem from "./player-episodes-modal-item";
import { usePlayerStore } from "../../model/store/use-player";
import { formatServerUrl } from "../../../../shared/utils/formatServerUrl";
import { Play } from "lucide-react";
import toast from "react-hot-toast";
import { Api } from "../../../../shared/api/api";
import { Episode } from "../../../../entities/content/types";
import { useProfileStore } from "../../../../entities/user/store/use-profile";
interface Props {
  setIsShow: React.Dispatch<SetStateAction<boolean>>;
}
const PlayerEpisodesModal: FC<Props> = ({ setIsShow }) => {
  const [isOpenSeasons, setIsOpenSeasons] = useState(false);
  const { userData } = useProfileStore();
  const {
    seasons,
    activeVideoId,
    setActiveVideo,
    setTitle,
    setSubtitle,
    setQuality,
    setQualityOptions,
  } = usePlayerStore();
  const activeSeason = useMemo(() => {
    const activeSeason = seasons.find((s) =>
      s.episodes.some((e) => e.id === activeVideoId)
    );
    return activeSeason || seasons[0];
  }, [seasons, activeVideoId]);
  useEffect(() => {
    setCurrentSeason(activeSeason);
  }, [activeSeason]);
  const [currentSeason, setCurrentSeason] = useState(activeSeason);
  const [showedModalSeasons, setShowedModalSeasons] = useState(activeSeason);
  const renderSeasons = () =>
    seasons.map((season) => (
      <button
        className="bg-transparent text-[#EAEDF1] text-[13px] font-[600] h-[46px] px-2 w-full flex items-center justify-between"
        onClick={() => {
          setIsOpenSeasons(false);
          setCurrentSeason(season);
          setShowedModalSeasons(season);
        }}
        key={season.id}
      >
        <span>сезон {season.number}</span>
        {season === activeSeason && (
          <Play size={20} fill="#EAEDF1" stroke="#EAEDF1" />
        )}
      </button>
    ));

  const handleSetEpisode = async (episode: Episode) => {
    if (episode.isFree || (userData && userData?.subscriptions.length > 0)) {
      try {
        const qualities = await Api.series.getEpisodeQualities(episode.id);
        setQualityOptions(qualities);
        setQuality(qualities[0].qualityName);
        setTitle(episode.title);
        setActiveVideo(episode.id);
        setSubtitle(`сезон ${activeSeason.number} эпизод ${episode.number}`);
        setIsShow(false);
      } catch (error) {
        console.log(error);
        toast.error("Something wrong happened", {
          position: "bottom-right",
        });
      }
    }
  };
  const renderEpisodes = () =>
    showedModalSeasons.episodes.map((item) => (
      <PlayerEpisodesModalItem
        isAvailable={
          item.isFree || (userData && userData.subscriptions.length > 0)
            ? true
            : false
        }
        onClick={() => handleSetEpisode(item)}
        key={item.id}
        episodeId={item.id}
        activeEpisodeId={activeVideoId}
        description={item.description}
        duration={item.duration}
        episodeNumber={item.number}
        imagePoster={formatServerUrl(item.posterUrl)}
        title={item.title}
      />
    ));
  return (
    <div className="absolute inset-[auto_auto_0px_0px] translate-x-[1555px] translate-y-[-57px] z-30">
      <div className="w-[345px] rounded-lg bg-[#29333D] min-w-[345px]">
        <PlayerEpisodesModalHeader
          seasonNumber={currentSeason.number}
          setIsShow={setIsShow}
          setIsOpenSeasons={setIsOpenSeasons}
          isOpenSeasons={isOpenSeasons}
        />
        <div
          className="max-h-[398px] pl-2 pr-2 pb-2 relative overflow-auto"
          style={{
            scrollbarColor: "#3D4A58 #29333D",
            scrollbarWidth: "thin",
          }}
        >
          {isOpenSeasons ? renderSeasons() : renderEpisodes()}
        </div>
      </div>
    </div>
  );
};

export default PlayerEpisodesModal;
