import { create } from "zustand";
import { Season } from "../../../../entities/content/types";
interface initialState {
  isPause: boolean;
  volume: number;
  duration: number;
  currentTime: number;
  title: string;
  subtitle?: string;
  velocity: number;
  quality: string;
  activeVideoId: string;
  seasons: Season[];
  qualityOptions: { qualityName: string }[];
  showType: "series" | "movie" | "trailer";
  setQuality: (quality: string) => void;
  setVolume: (volume: number) => void;
  setVelocity: (velocity: number) => void;
  setTitle: (title: string) => void;
  setSeasons: (seasons: Season[]) => void;
  setShowType: (showType: "series" | "movie" | "trailer") => void;
  setSubtitle: (subtitle: string) => void;
  setQualityOptions: (qualityOptions: { qualityName: string }[]) => void;
  setDuration: (duration: number) => void;
  setActiveVideo: (activeVideoId: string) => void;
  setCurrentTime: (currentTime: number) => void;
  setIsPause: (isPause: boolean) => void;
}
export const usePlayerStore = create<initialState>((set, get) => ({
  qualityOptions: [],
  activeVideoId: "",
  seasons: [],
  isPause: false,
  volume: 50,
  showType: "movie",
  duration: 0,
  currentTime: 0,
  velocity: 1,
  quality: "720p",
  title: "",
  subtitle: "",
  setSeasons: (seasons: Season[]) => set({ seasons }),
  setQualityOptions: (qualityOptions: { qualityName: string }[]) =>
    set({ qualityOptions }),
  setQuality: (quality: string) => set({ quality }),
  setActiveVideo: (activeVideoId: string) => set({ activeVideoId }),
  setShowType: (showType: "series" | "movie" | "trailer") => set({ showType }),
  setVelocity: (velocity: number) => set({ velocity }),
  setVolume: (volume: number) => set({ volume }),
  setTitle: (title: string) => set({ title }),
  setSubtitle: (subtitle: string) => set({ subtitle }),
  setDuration: (duration: number) => set({ duration }),
  setCurrentTime: (currentTime: number) => set({ currentTime }),
  setIsPause: (isPause: boolean) => set({ isPause }),
}));
