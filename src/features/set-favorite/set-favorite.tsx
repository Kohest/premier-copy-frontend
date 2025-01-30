import React, { FC, useEffect, useState } from "react";
import ContentInteractionButton from "../../shared/ui/cotnent-interaction-button/content-interaction-button";
import { Bookmark } from "lucide-react";
import { useFavorite } from "../../shared/hooks/use-favorite";
import toast from "react-hot-toast";
import Loader from "../../shared/ui/loader";
import { useProfileStore } from "../../entities/user/store/use-profile";
import GlobalModal from "../../widgets/global-modal/globalModal";
interface Props {
  contentId: string;
}
const SetFavorite: FC<Props> = ({ contentId }) => {
  const { favoriteItems, addFavoriteItem, deleteFavoriteItem, error, loading } =
    useFavorite();
  const { userData } = useProfileStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddFavorite = async () => {
    if (!userData) {
      setIsModalOpen(true);
      return;
    }
    await addFavoriteItem(contentId);
  };

  const handleDeleteFavorite = async () => {
    await deleteFavoriteItem(contentId);
  };
  const isFavorite = favoriteItems.some((item) => item.id === contentId);
  useEffect(() => {
    error && toast.error("Что-то пошло не так", { position: "bottom-right" });
  }, [error]);
  return (
    <>
      {isModalOpen && (
        <GlobalModal initialFormType="login" setAuthModal={setIsModalOpen} />
      )}
      {loading ? (
        <ContentInteractionButton Icon={<Loader />} />
      ) : (
        <ContentInteractionButton
          tooltipText={
            isFavorite ? "Удалить из избранного" : "Добавить в избранное"
          }
          onClick={isFavorite ? handleDeleteFavorite : handleAddFavorite}
          Icon={<Bookmark fill={isFavorite ? "#ececec" : "none"} />}
        />
      )}
    </>
  );
};

export default SetFavorite;
