import styled from 'styled-components';

export const Container = styled.div`
  // grid with 2 rows and row 1 is 20px
  display: grid;
  grid-template-rows: 30px 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #1e1e1e;

  #ShowSidebar {
    grid-template-columns: 250px 1fr;
  }
`;

export const Waiting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #fff;
  background-color: #1e1e1e;
`;

export const Application = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow: hidden;
`;
