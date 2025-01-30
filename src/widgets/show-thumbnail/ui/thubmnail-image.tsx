import React, { FC } from "react";
import { formatServerUrl } from "../../../shared/utils/formatServerUrl";
interface Props {
  thumbnailImage: string;
}
const ThumbnailImage: FC<Props> = ({ thumbnailImage }) => {
  return (
    <div
      className="max-w-[72.6vw] ml-auto relative 
before:w-[204px] before:absolute before:left-0 before:top-0 before:h-full before:bg-custom-before
after:h-[190px] after:bottom-0 after:left-0 after:w-full after:absolute after:bg-custom-after"
    >
      <figure>
        <picture>
          <img
            src={formatServerUrl(thumbnailImage)}
            alt="thumbnail"
            className="min-h-[40.8vw] h-auto max-h-[40.8vw] block w-full object-cover"
          />
        </picture>
      </figure>
    </div>
  );
};

export default ThumbnailImage;
