import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;

export const HeaderContainer = styled.header`
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  height: 54px;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 24px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 54px;
`;

export const FormContainer = styled.form`
  border: 2px solid #000;
  display: flex;
  padding: 25px;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  height: 48px;
  border: 2px solid #000;
`;

type Button = {
  primary?: boolean;
};

export const Button = styled.button`
  border: 2px solid #000;
  padding: 10px 20px;
  color: ${(props: Button) => (props.primary ? "#fff" : "#000")};
  background: ${(props: Button) => (props.primary ? "#000" : "#fff")};
  cursor: pointer;
`;
type Group = {
  direction: "column" | "row";
};

export const Group = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 10px;
  flex-direction: ${(props: Group) => props.direction};
`;

export const Card = styled.div`
  display: flex;
  padding: 20px;
  border: 2px solid #000;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: green;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  padding: 10px;
`;

export const Span = styled.span`
  color: red;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1300px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;
