import styled from 'styled-components';

// Api Manager
export const ApiManagerContainer = styled.div`
  margin: 5px;
  transition: 0.2s;
`;

export const ApiManagerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px;
  width: 95%;
  margin: 0 auto;
  transition: 0.2s;

  * {
    user-select: none;
  }
`;
export const ApiManagerHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  color: white;
  transition: 0.2s;
`;
export const ApiManagerHeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
`;
export const ApiManagerAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin-left: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
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

  &:hover {
    color: rgba(225, 0, 122, 0.8);
  }

  &:active {
    color: rgba(225, 0, 122, 0.5);
  }
`;
export const ApiManagerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  transition: 0.2s;
`;
export const ApiManagerBodyItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  transition: 0.2s;

  #Unknown {
    color: #bfbfbf;
  }
  #Success {
    color: #00ff00;
  }
  #Error {
    color: #ff0000;
  }
`;
export const ApiManagerBodyItemType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 3px;
  transition: 0.2s;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  color: #ff007a;
  user-select: none;
`;
export const ApiManagerBodyItemName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 13px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  color: white;
  transition: 0.2s;
`;
export const ApiManagerBodyItemUrl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 13px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: white;
  transition: 0.2s;
`;
export const ApiManagerBodyItemStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 13px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  user-select: none;
  transition: 0.2s;
`;
export const ApiManagerBodyItemActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
`;
