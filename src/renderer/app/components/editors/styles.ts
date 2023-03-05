import styled from "styled-components";

export const EditorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Editor = styled.div`
  max-width: 500px;
  max-height: 450px;
  background-color: rgb(35, 35, 35);
  border-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
`;
export const EditorHeader = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
export const EditorHeaderTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: rgb(255, 255, 255);
  margin-left: 10px;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
`;
export const EditorBody = styled.div`
  width: calc(95% - 10px);
  margin: 0 auto;
  height: 100%;
  padding-right: 10px;
  overflow-y: auto;
  overflow-x: hidden;

  .code-editor {
    width: 100%;

    margin-top: 5px;
    color: rgb(255, 255, 255);
    margin-bottom: 5px;
    background-color: rgba(175, 0, 83, 0.02);
    border: 1px solid rgba(175, 0, 83, 0.3);
    outline: none;
    &:active,
    &:focus {
      background-color: rgba(175, 0, 83, 0.1);
      border: 1px solid rgba(175, 0, 83, 0.3);
      outline: none;
    }
  }

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #1d1d1d;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff007a;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ff007a;
  }
`;
export const EditorFooter = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
export const EditorFooterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin-left: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: "Quicksand", sans-serif;
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
export const EditorFooterError = styled.p`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #df4b4b;
  background-color: rgba(176, 45, 45, 0.15);
  border-radius: 3px;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
`;
export const EditorDualInput = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  padding-bottom: 10px;
`;
export const EditorTextInput = styled.input`
  width: calc(100% - 20px);
  height: 40px;
  border: none;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: rgb(255, 255, 255);
  font-family: "Quicksand", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: 0.2s;
  outline: none;
  border: 1px solid rgba(175, 0, 83, 0.3);
  background-color: rgba(175, 0, 83, 0.04);

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.8px;
  }
`;
export const EditorSelectInput = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid rgba(175, 0, 83, 0.3);
  background-color: rgba(175, 0, 83, 0.04);
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: rgb(255, 0, 122);
  font-family: "Quicksand", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: 0.2s;
  outline: none;

  option {
    width: 100%;
    color: rgb(255, 0, 122);
    background-color: rgb(35, 35, 35);
  }
`;
export const EditorLabelledInput = styled.div`
  margin-top: 5px;

  label {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    letter-spacing: 0.5px;
    padding-left: 5px;
  }
`;
export const EditorJsonBodyEditor = styled.textarea`
  width: calc(100% - 20px);
  height: 80px;
  border: none;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: rgb(255, 255, 255);
  font-family: "Quicksand", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: 0.2s;
  outline: none;
  border: 1px solid rgba(175, 0, 83, 0.3);
  background-color: rgba(175, 0, 83, 0.04);
`;
