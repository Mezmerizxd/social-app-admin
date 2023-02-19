import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1e1e1e;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-app-region: drag;
`;

export const Titlebar = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    width: 15px;
    border-radius: 50%;
    margin-left: 10px;
  }
`;

export const TitlebarTitle = styled.div`
  color: #fff;
  margin-left: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
  text-align: center;
`;

export const TitlebarActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  -webkit-app-region: no-drag;

  #close {
    &:hover {
      background-color: #ff5f56;
    }
  }
`;

export const TitlebarAction = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  color: #fff;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: #3f4148;
  }
`;
