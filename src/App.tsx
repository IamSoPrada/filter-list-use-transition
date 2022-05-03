import React from "react";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppContainer } from "./styles";

type AppProps = {
  children?: React.ReactNode;
};

export const App: React.FC<AppProps> = ({ children }) => {
  return (
    <AppContainer>
      <Header />
      {children}
      <Main />
      <Footer />
    </AppContainer>
  );
};
