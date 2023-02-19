import { BsArrowLeftRight } from 'react-icons/bs';
import { SidebarContainer, SidebarHandle } from './styles';
import { setContext, showSidebar } from '../../reducers/reducer';

export default ({
  state,
  dispatch,
  actions,
}: Renderer.Components.Sidebar.Props) => {
  return (
    <SidebarContainer
      style={state.showSidebar ? { width: '250px' } : { width: '50px' }}
    >
      <SidebarHandle onClick={() => dispatch(showSidebar(!state.showSidebar))}>
        <BsArrowLeftRight />
      </SidebarHandle>
      <div
        className="Sidebar"
        id={state.showSidebar ? 'ShowSidebar' : 'HideSidebar'}
      >
        {actions.map((action) => (
          <div className="SidebarGroup" key={action.groupName}>
            {state.showSidebar && <h1>{action.groupName}</h1>}
            {action.actions.map((option) => (
              <div
                className="SidebarAction"
                key={option.name}
                onClick={() => dispatch(setContext(option.context))}
                id={
                  state.currentContext === option.context
                    ? 'SidebarActionSelected'
                    : ''
                }
              >
                {option.icon}
                {state.showSidebar && <p>{option.name}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </SidebarContainer>
  );
};
