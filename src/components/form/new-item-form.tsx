import React, { useState } from "react";
import { useFocus } from "../../utils/custom-hooks/useFocus";
import { NewItemButton } from "../button/button";
import { NewItemFormContainer, NewItemInput } from "./input";
interface NewItemFormProps {
  onAdd(text: string): void;
}
export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();
  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
