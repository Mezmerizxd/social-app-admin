import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { AiOutlineMinus } from 'react-icons/ai';
import { VscChromeMaximize, VscChromeRestore } from 'react-icons/vsc';
import {
  Container,
  Titlebar,
  TitlebarTitle,
  TitlebarActions,
  TitlebarAction,
} from './styles';
import icon from '../../../../assets/icon.svg';

export default ({ state }: Renderer.Components.Props) => {
  const [isMaximized, setIsMaximized] = useState(false);

  function close() {
    window.electron.AppManager.saveState(state);
    window.electron.AppManager.window.close();
  }

  function minimize() {
    window.electron.AppManager.window.minimize();
  }

  function maximize() {
    window.electron.AppManager.window.maximize();
    setIsMaximized(!isMaximized);
  }

  return (
    <Container>
      <Titlebar>
        <img src={icon} alt="icon" />
        <TitlebarTitle>
          {state.projectName} - v{state.projectVersion}
        </TitlebarTitle>
        <TitlebarActions>
          <TitlebarAction onClick={minimize}>
            <AiOutlineMinus />
          </TitlebarAction>
          <TitlebarAction onClick={maximize}>
            {isMaximized ? <VscChromeRestore /> : <VscChromeMaximize />}
          </TitlebarAction>
          <TitlebarAction onClick={close} id="close">
            <MdClose />
          </TitlebarAction>
        </TitlebarActions>
      </Titlebar>
    </Container>
  );
};
