import { useEffect } from 'react';
import { FaEdit, FaPlay } from 'react-icons/fa';
import { editApi, toggleApiEditor } from 'renderer/reducers/reducer';
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
  state,
  dispatch,
  title,
  actions,
  options,
}: Renderer.Components.ApiManager.Props) => {
  useEffect(() => {
    window.electron.Api.receive('api-manager-response', (data: any) => {
      if (data !== null) {
        const r = JSON.parse(data);
        console.log('updating api status');

        const apis: any = [];
        state.apis.forEach((api) => {
          if (api.id === r.api.id) {
            apis.push({
              id: r.api.id,
              method: r.api.method,
              name: r.api.name,
              url: r.api.url,
              contentType: r.api.contentType,
              connection: r.api.connection,
              body: r.api.body,
              status: r.status,
              response: {
                data: r.data,
              },
            });
          } else {
            apis.push(api);
          }
        });
        dispatch(editApi(apis));
      }
    });
  }, []);
  return (
    <ApiManagerContainer id={title}>
      <ApiManagerHeader>
        <ApiManagerHeaderTitle>{title}</ApiManagerHeaderTitle>
        <ApiManagerHeaderActions>
          {actions.map((action, i) => (
            <ApiManagerAction key={i} onClick={action.func}>
              {action.name}
            </ApiManagerAction>
          ))}
        </ApiManagerHeaderActions>
      </ApiManagerHeader>
      <ApiManagerBody>
        {options.map((option, i) => (
          <ApiManagerBodyItem key={i}>
            <ApiManagerBodyItemType>{option.method}</ApiManagerBodyItemType>
            <ApiManagerBodyItemName>{option.name}</ApiManagerBodyItemName>
            <ApiManagerBodyItemUrl>{option.url}</ApiManagerBodyItemUrl>
            <ApiManagerBodyItemStatus id={option.status.toString()}>
              {option.status}
            </ApiManagerBodyItemStatus>
            <ApiManagerBodyItemActions>
              <ApiManagerAction
                onClick={() =>
                  window.electron.ApiManager.testApiRequest(option)
                }
              >
                <FaPlay />
              </ApiManagerAction>
              <ApiManagerAction
                onClick={() => {
                  dispatch(toggleApiEditor({ type: 'edit', data: option }));
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
