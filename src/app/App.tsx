import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import VideoPlayer from "../features/video-player/ui/video-player";
import { usePlayerModalStore } from "../shared/store/use-player-modal";
function App() {
  const { isModalOpen, toggleModal } = usePlayerModalStore();
  return (
    <>
      {isModalOpen && <VideoPlayer />}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
