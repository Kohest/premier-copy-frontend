import { useEffect } from "react";
import { useContentStore } from "../../entities/content/store/use-content";
import { IContentItem } from "../../entities/content/types";

type ReturnProps = {
  contentItem: IContentItem | null;
  error: boolean;
  loading: boolean;
  fetchContentItem: (id: string) => Promise<void>;
};
export const useGetContentById = (contentId: string): ReturnProps => {
  const contentState = useContentStore((state) => state);

  useEffect(() => {
    contentState.fetchContentItem(contentId);
  }, []);

  return contentState;
};
