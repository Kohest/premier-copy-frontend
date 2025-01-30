import { useCallback, useEffect, useState } from "react";
import { Api } from "../api/api";
import { IBannerItem } from "../../entities/banner/types";
interface ReturnTypes {
  loading: boolean;
  error: string | null;
  bannerItem: IBannerItem | null;
}
export const useGetBanner = (id: string): ReturnTypes => {
  const [bannerItem, setBannerItem] = useState<IBannerItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const handleError = useCallback((err: unknown, message: string) => {
    setError(message);
  }, []);
  const handleGetBanner = async () => {
    try {
      setLoading(true);
      const banner = await Api.banner.getBannerById(id);
      setBannerItem(banner);
    } catch (error) {
      handleError(error, "Failed to load banner");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetBanner();
  }, []);
  return {
    loading,
    error,
    bannerItem,
  };
};
