import { useEffect } from "react";
import { FaEdit, FaPlay } from "react-icons/fa";
import { setApis, toggleApiEditor } from "../../../reducers/reducer";
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
} from "./styles";

export default ({
  state,
  dispatch,
  title,
  actions,
  options,
}: Renderer.Component.ApiManager.Props) => {
  useEffect(() => {
    window.api.basic.receive("app-mgr-receive-api", (data: any) => {
      dispatch(setApis(data));
    });

    window.api.basic.receive("app-mgr-receive-api-test", (data: any) => {
      console.log(data);
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
        {options &&
          options.map((option, i) => (
            <ApiManagerBodyItem key={i}>
              <ApiManagerBodyItemType>{option.method}</ApiManagerBodyItemType>
              <ApiManagerBodyItemName>{option.name}</ApiManagerBodyItemName>
              <ApiManagerBodyItemUrl>{option.url}</ApiManagerBodyItemUrl>
              <ApiManagerBodyItemStatus id={option.status.toString()}>
                {option.status === 0
                  ? "Not tested"
                  : option.status === -1
                  ? "Error"
                  : option.status}
              </ApiManagerBodyItemStatus>
              <ApiManagerBodyItemActions>
                <ApiManagerAction
                  onClick={() => window.api.appManager.testApi(option)}
                >
                  <FaPlay />
                </ApiManagerAction>
                <ApiManagerAction
                  onClick={() => {
                    dispatch(toggleApiEditor({ type: "edit", data: option }));
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
