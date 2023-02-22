import { FaEdit, FaPlay } from 'react-icons/fa';
import {
  ApiManagerContainer,
  ApiManagerHeader,
  ApiManagerHeaderTitle,
  ApiManagerHeaderActions,
  ApiManagerAction,
  ApiManagerBody,
  ApiManagerBodyItem,
  ApiManagerBodyItemType,
  ApiManagerBodyItemUrl,
  ApiManagerBodyItemActions,
  ApiManagerBodyItemName,
  ApiManagerBodyItemStatus,
} from './styles';

import EditApi from '../popups/EditApi';
import { editApi } from 'renderer/reducers/reducer';

export default ({
  state,
  dispatch,
  title,
  actions,
  options,
}: Renderer.Components.ApiManager.Props) => {
  return (
    <ApiManagerContainer id={title}>
      <ApiManagerHeader>
        <ApiManagerHeaderTitle>{title}</ApiManagerHeaderTitle>
        <ApiManagerHeaderActions>
          {actions.map((action, i) => (
            <ApiManagerAction key={i}>{action.name}</ApiManagerAction>
          ))}
        </ApiManagerHeaderActions>
      </ApiManagerHeader>
      <ApiManagerBody>
        {options.map((option, i) => (
          <ApiManagerBodyItem key={i}>
            <ApiManagerBodyItemType>{option.method}</ApiManagerBodyItemType>
            <ApiManagerBodyItemName>{option.name}</ApiManagerBodyItemName>
            <ApiManagerBodyItemUrl>{option.url}</ApiManagerBodyItemUrl>
            <ApiManagerBodyItemStatus id={option.status}>
              {option.status}
            </ApiManagerBodyItemStatus>
            <ApiManagerBodyItemActions>
              <ApiManagerAction>
                <FaPlay />
              </ApiManagerAction>
              <ApiManagerAction
                onClick={() => {
                  dispatch(editApi(option));
                }}
              >
                <FaEdit />
              </ApiManagerAction>
            </ApiManagerBodyItemActions>
          </ApiManagerBodyItem>
        ))}
      </ApiManagerBody>

      {state.editApi.isEditing && <EditApi state={state} dispatch={dispatch} />}
    </ApiManagerContainer>
  );
};
