import Dashboard from "../Dashboard/Dashboard";
import PageTitle from "../PageTitle/PageTitle";
import styled from "styled-components";

const MainContainer = styled.main`
  margin-top: 60px;
  padding: 15px;
  transition: all 0.3s;

  @media (max-width: 1199px) {
    padding: 20px;
  }
`;

function Main() {
  return (
    <MainContainer id="main" className="main">
      <PageTitle page="Dashboard" />
      <Dashboard />
    </MainContainer>
  );
}

export default Main;
