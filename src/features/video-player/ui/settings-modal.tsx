import { CircleGauge, Settings } from "lucide-react";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import SettingsModalButton from "./settings-modal-button";
import { usePlayerStore } from "../model/store/use-player";
interface Props {
  setIsShow: Dispatch<SetStateAction<boolean>>;
}
const SettingsModal: FC<Props> = ({ setIsShow }) => {
  const [openVelocity, setOpenVelocity] = useState(false);
  const [openQuality, setOpenQuality] = useState(false);
  const {
    setVelocity,
    velocity,
    quality,
    setQuality,
    qualityOptions,
    setIsPause,
  } = usePlayerStore();
  const velocityOptions = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  const changeVelocity = (velocity: number) => {
    setVelocity(velocity);
    setOpenVelocity(false);
    setIsShow(false);
  };
  const changeQuality = async (quality: string) => {
    setQuality(quality);
    setOpenQuality(false);
    setIsShow(false);
    setIsPause(false);
  };
  const getQualityNumber = (qualityName: string) => {
    const match = qualityName.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  return (
    <div className="absolute inset-[auto_auto_0px_0px] z-[2]">
      {!openVelocity && !openQuality && (
        <div className="w-[268px] flex rounded-xl flex items-end text-[14px] bg-[#29333D] flex-col translate-x-[1632px] translate-y-[-60px]">
          <SettingsModalButton
            text="Скорость"
            Icon={<CircleGauge />}
            isForward={true}
            forwardText={velocity + "x"}
            onClick={() => setOpenVelocity(true)}
          />
          <SettingsModalButton
            text="Качество"
            Icon={<Settings />}
            isForward={true}
            forwardText={quality}
            onClick={() => setOpenQuality(true)}
          />
        </div>
      )}
      {openVelocity && (
        <div className="w-[268px] flex rounded-xl flex items-end text-[14px] bg-[#29333D] flex-col translate-x-[1632px] translate-y-[-60px]">
          <SettingsModalButton
            text="Скорость"
            isBack={true}
            onClick={() => setOpenVelocity(false)}
          />
          {velocityOptions.map((option) => (
            <SettingsModalButton
              key={option}
              isDisabled={option === velocity}
              text={`${option}x`}
              onClick={() => changeVelocity(option)}
            />
          ))}
        </div>
      )}
      {openQuality && (
        <div className="w-[268px] flex rounded-xl flex items-end text-[14px] bg-[#29333D] flex-col translate-x-[1632px] translate-y-[-60px]">
          <SettingsModalButton
            text="Качество"
            isBack={true}
            onClick={() => setOpenQuality(false)}
          />
          {qualityOptions
            .slice()
            .sort(
              (a, b) =>
                getQualityNumber(b.qualityName) -
                getQualityNumber(a.qualityName)
            )
            .map((option) => (
              <SettingsModalButton
                isDisabled={option.qualityName === quality}
                key={option.qualityName}
                text={option.qualityName}
                onClick={() => changeQuality(option.qualityName)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default SettingsModal;
