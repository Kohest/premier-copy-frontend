import React, { FC } from "react";
import PlayerDuration from "./player-duration";
import PlayerPlayPause from "./player-play-pause";
import PlayerVolume from "./player-volume";
import PlayerSettings from "./player-settings";
import PlayerFullscreen from "./player-fullscreen";
import { formatTime } from "../../../../shared/utils/formatTime";
import SettingsModal from "../../ui/settings-modal";
import { useOutside } from "../../../../shared/hooks/use-click-outside";
import PlayerEpisodes from "./player-episodes";
import PlayerEpisodesModal from "../player-episodes/player-episodes-modal";
interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
  togglePlayPause: () => void;
  currentTime: number;
  duration: number;
  handleVolumeToggle: () => void;
  isFullscreen: boolean;
  showType: "series" | "movie" | "trailer";
  bufferedWidth: number;
  handleFullscreen: () => void;
}
const VideoPlayerControls: FC<Props> = ({
  videoRef,
  togglePlayPause,
  currentTime,
  showType,
  bufferedWidth,
  duration,
  handleVolumeToggle,
  handleFullscreen,
  isFullscreen,
}) => {
  const { isShow, ref, setIsShow } = useOutside(false);
  const {
    isShow: isShowEpisodes,
    ref: refEpisodes,
    setIsShow: setIsShowEpisodes,
  } = useOutside(false);
  return (
    <section className="absolute bottom-0 left-0 right-0 text-white z-20">
      <div className="bg-player-shadow absolute left-0 opacity-100 right-0 h-[192px] -bottom-1 pointer-events-none z-[2]" />
      <PlayerDuration videoRef={videoRef} bufferedWidth={bufferedWidth} />
      <div className="flex my-[10px] mx-3 ">
        <PlayerPlayPause togglePlayPause={togglePlayPause} />
        <PlayerVolume
          videoRef={videoRef}
          handleVolumeToggle={handleVolumeToggle}
        />
        <div className="flex w-full relative items-center text-white text-[12px] z-[3]">
          <div className="leading-[17.6px] flex-shrink-0">
            {formatTime(currentTime)}
          </div>
          <div className="mx-[2px]">/</div>
          <div className="leading-[17.6px] flex-shrink-0">
            {formatTime(duration)}
          </div>
        </div>
        <div className="flex justify-end w-full z-[3]">
          {showType === "series" && (
            <PlayerEpisodes
              isShow={isShowEpisodes}
              setIsShow={setIsShowEpisodes}
            />
          )}
          <PlayerSettings isShow={isShow} setIsShow={setIsShow} />
          <PlayerFullscreen
            handleFullscreen={handleFullscreen}
            isFullscreen={isFullscreen}
          />
        </div>
        {isShow && (
          <div ref={ref}>
            <SettingsModal setIsShow={setIsShow} />
          </div>
        )}
        {isShowEpisodes && (
          <div ref={refEpisodes}>
            <PlayerEpisodesModal setIsShow={setIsShowEpisodes} />
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoPlayerControls;
