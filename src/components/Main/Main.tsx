import React from "react";
import { MainContainer } from "@/styles";
import { Form } from "@/components/Form";

type MainProps = {
  children?: React.ReactNode;
};

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <MainContainer>
      {children}
      <Form />
    </MainContainer>
  );
};
