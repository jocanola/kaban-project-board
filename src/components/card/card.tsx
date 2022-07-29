import React from "react";
import { CardContainer } from "../card-container /card-container.style";

interface CardProps {
  text: string;
}
export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
