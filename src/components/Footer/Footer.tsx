import React from "react";
import { FooterContainer } from "@/styles";

type FooterProps = {
  children?: React.ReactNode;
};

export const Footer: React.FC<FooterProps> = ({ children }) => {
  return <FooterContainer>{children}Footer</FooterContainer>;
};
