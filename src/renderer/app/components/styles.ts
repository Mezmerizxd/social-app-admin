import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background-color: #1d1d1d;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  #ShowSidebar {
    overflow-y: auto;
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

    .SidebarGroup {
      padding-bottom: 20px;
      h1 {
        font-size: 14px;
        font-family: 'Quicksand', sans-serif;
        color: white;
        margin-left: 20px;
        margin-top: 10px;
      }
    }

    .SidebarAction {
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc(100% - 50px);
      padding: 10px;
      margin-top: 10px;
      margin-left: 10px;
      padding-left: 20px;
      color: white;
      cursor: pointer;
      border-radius: 3px;
      transition: 0.2s;

      p {
        width: 100%;
        margin-left: 10px;
        font-size: 14px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
      }

      svg {
        width: 25px;
        height: 25px;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.8);
      }

      &.active {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    #SidebarActionSelected {
      color: #ff007a;
      svg {
        fill: #ff007a;
      }
    }
  }

  #HideSidebar {
    .SidebarGroup {
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      padding-top: 10px;
    }

    .SidebarAction {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-bottom: 20px;
      margin-top: 5px;
      cursor: pointer;
      transition: 0.2s;

      svg {
        width: 25px;
        height: 25px;
      }

      &:hover {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    #SidebarActionSelected {
      color: #ff007a;
      svg {
        fill: #ff007a;
      }
    }
  }
`;

export const SidebarHandle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
