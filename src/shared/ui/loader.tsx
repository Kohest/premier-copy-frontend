import { Loader as LoaderIcon } from "lucide-react";
import { FC } from "react";
import { cn } from "../utils/cnUtil";
interface Props {
  height?: string;
  width?: string;
  className?: string;
}
const Loader: FC<Props> = ({ height = 20, width = 20, className }) => {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <LoaderIcon
        className="animate-spin text-white"
        style={{ height: `${height}px`, width: `${width}px` }}
      />
    </div>
  );
};

export default Loader;
