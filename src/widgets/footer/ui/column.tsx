import React, { FC } from "react";
import ColumnItem from "./column-item";
import { IColumnItem } from "../model/types";
interface Props {
  title: string;
  columnItems: IColumnItem[];
}
const Column: FC<Props> = ({ title, columnItems }) => {
  return (
    <>
      <div className="mb-4 text-[#ececec] font-bold">{title}</div>
      <ul className="max-w-[280px]">
        {columnItems.map((item) => (
          <ColumnItem key={item.title} href={item.href} title={item.title} />
        ))}
      </ul>
    </>
  );
};

export default Column;
