import type { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  color: ${({ theme: { colors } }) => colors.pointColor};
  text-align: center;
  font-size: 24px;
`;

const Home: NextPage = () => {
  return <Container>Home</Container>;
};

export default Home;
