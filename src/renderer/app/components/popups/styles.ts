import styled from 'styled-components';

export const PopupContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const Popup = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: rgb(30, 30, 30);
  padding: 5px;
  border-radius: 2px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr;
`;
export const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  user-select: none;
`;
export const PopupSmallTitle = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Quicksand', sans-serif;
  color: rgb(200, 200, 200);
`;
export const PopupCloseButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  border-radius: 50%;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  color: rgb(200, 200, 200);
  transition: background-color 0.2s ease-in-out;
  margin-left: 20px;

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;
export const PopupBody = styled.div``;
export const PopupSameLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Edit Api
export const EditApi = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr;
  padding: 5px;
  padding-top: 10px;
  user-select: none;
`;
export const EditApiTextField = styled.input`
  background-color: rgb(30, 30, 30);
  border: none;
  outline: none;
  color: rgb(200, 200, 200);
  font-size: 15px;
  font-family: 'Quicksand', sans-serif;
  border-radius: 3px;
  transition: background-color 0.2s ease-in-out;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid rgba(175, 0, 83, 0.3);
  background-color: rgba(175, 0, 83, 0.04);

  &:placeholder {
    color: rgb(200, 200, 200);
    font-weight: lighter;
  }
`;
export const EditApiActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EditApiButton = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s;
  color: rgb(255, 0, 122);
  background-color: rgba(175, 0, 83, 0.1);
  border: 1px solid rgba(175, 0, 83, 0.3);
  user-select: none;
  text-align: center;
  padding: 5px 10px;
  margin: 5px;
  margin-top: 10px;
  margin-bottom: 0px;

  &:hover {
    color: rgba(225, 0, 122, 0.8);
  }

  &:active {
    color: rgba(225, 0, 122, 0.5);
  }
`;
export const EditApiSelect = styled.select`
  background-color: rgb(30, 30, 30);
  border: none;
  outline: none;
  color: rgb(255, 0, 122);
  font-size: 15px;
  font-weight: 500;
  font-family: 'Quicksand', sans-serif;
  border-radius: 2px;
  transition: background-color 0.2s ease-in-out;
  background-color: rgba(175, 0, 83, 0.04);
  border: 1px solid rgba(175, 0, 83, 0.3);
  padding-left: 10px;

  option {
    // custom dropdown option style
    color: rgb(30, 30, 30);
    font-size: 15px;
    font-weight: 500;
    font-family: 'Quicksand', sans-serif;
    border-radius: 2px;
  }
`;
