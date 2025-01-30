import { useEffect, useState } from "react";
import {
  ContentType,
  Country,
  GenreParams,
  IContentItem,
} from "../../entities/content/types";
import { Api } from "../api/api";
import toast from "react-hot-toast";
interface Props {
  count: number;
  genre?: GenreParams;
  country?: Country;
  year?: number;
  offset?: number;
  type?: ContentType;
}
interface ReturnProps {
  sliderItems: IContentItem[];
  loading: boolean;
}
export const useGetSmSliderItems = ({
  count,
  genre,
  country,
  year,
  offset,
  type,
}: Props): ReturnProps => {
  const [loading, setLoading] = useState(true);
  const [sliderItems, setSliderItems] = useState([] as IContentItem[]);
  const handleLoadSliderData = async () => {
    try {
      setLoading(true);
      const items = await Api.content.getContent({
        count,
        genre,
        country,
        year,
        type,
        offset,
      });
      setSliderItems(items);
    } catch (error) {
      toast.error("Произошла ошибка загрузки", {
        position: "bottom-right",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleLoadSliderData();
  }, []);

  return { sliderItems, loading };
};
