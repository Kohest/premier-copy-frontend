export const formatTime = (seconds: number): string => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const formattedHrs = hrs > 0 ? `${hrs}:` : "";
  const formattedMins = mins < 10 ? `0${mins}` : mins.toString();
  const formattedSecs = secs < 10 ? `0${secs}` : secs.toString();

  return `${formattedHrs}${formattedMins}:${formattedSecs}`;
};
