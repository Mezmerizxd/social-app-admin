import { FaEdit, FaPlay } from 'react-icons/fa';
import { toggleApiEditor } from 'renderer/reducers/reducer';
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

export default ({
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
                  dispatch(toggleApiEditor(option));
                }}
              >
                <FaEdit />
              </ApiManagerAction>
            </ApiManagerBodyItemActions>
          </ApiManagerBodyItem>
        ))}
      </ApiManagerBody>
    </ApiManagerContainer>
  );
};
