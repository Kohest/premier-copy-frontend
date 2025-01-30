import React, { FC, useState } from "react";
import { cn } from "../../../shared/utils/cnUtil";

interface Props {
  showDescription: string;
  showTitle: string;
}

const ThumbnailDescription: FC<Props> = ({ showDescription, showTitle }) => {
  const [showAll, setShowAll] = useState(false);
  const maxLength = 195;
  const isLongDescription = showDescription.length > maxLength;
  const shortDescription = isLongDescription
    ? showDescription.substring(0, maxLength)
    : showDescription;
  const longDescription = isLongDescription
    ? showDescription.substring(maxLength)
    : "";

  return (
    <div className="w-full main-container">
      <h1 className="text-[#8a8a8a] mb-2 text-[1rem]">{showTitle}</h1>
      <p className="text-[#ececec] w-[40%] text-[20px]">
        <span className="text-left">{shortDescription}</span>
        {isLongDescription && (
          <>
            <span className={cn("hidden", showAll && "inline")}>
              {longDescription}
            </span>
            <span
              onClick={() => setShowAll(!showAll)}
              className={cn(
                "text-[#8a8a8a] inline-block cursor-pointer",
                showAll && "hidden"
              )}
            >
              ...&nbsp;еще
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default ThumbnailDescription;
