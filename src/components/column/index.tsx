import React, { PropsWithChildren } from "react";
import { AddNewItem } from "../add-new-item/add-new-item";
import { ColumnContainer } from "../column-container";
import { ColumnTitle } from "../column-title";

interface ColumnProps {
  title: string;
}
export const Column = ({ title, children }: PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={() => console.log("Let's goooooo")}
        dark
      />
    </ColumnContainer>
  );
};
