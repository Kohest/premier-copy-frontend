import { useCallback, useState } from "react";
import { Api } from "../../../shared/api/api";
import { useSearchParams } from "react-router-dom";
import { IContentItem } from "../../../entities/content/types";
type ReturnProps = {
  items: IContentItem[];
  searchQuery: string | null;
  loading: boolean;
  error: string | null;
  handleLoadSearchData: (offset: number, reset?: boolean) => void;
  hasMore: boolean;
};
export const useSearch = (): ReturnProps => {
  const [hasMore, setHasMore] = useState(true);

  const [items, setItems] = useState([] as IContentItem[]);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const handleError = useCallback((err: unknown, message: string) => {
    console.error(error);
    setError(message);
  }, []);
  const handleLoadSearchData = async (offset: number, reset = false) => {
    try {
      setLoading(true);
      const data = await Api.content.getContent({
        search: searchQuery || "",
        count: 8,
        offset: offset,
      });
      console.log(data);
      if (reset) {
        setItems(data);
      } else {
        setItems((prev) => [...prev, ...data]);
      }
      setHasMore(data.length > 0);
    } catch (error) {
      handleError(error, "Failed to load review");
    } finally {
      setLoading(false);
    }
  };

  return {
    items,
    searchQuery,
    loading,
    error,
    handleLoadSearchData,
    hasMore,
  };
};
