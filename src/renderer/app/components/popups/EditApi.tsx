import { FaTimes, FaSave, FaTrash } from "react-icons/fa";
import {
  PopupContainer,
  Popup,
  PopupSmallTitle,
  PopupBody,
  PopupHeader,
  PopupCloseButton,
  EditApi,
  EditApiTextField,
  EditApiSelect,
  EditApiButton,
  EditApiActions,
} from "./styles";
// import {
//   editApiClose,
//   editApiRemove,
//   editApiSave,
// } from "../../../reducers/reducer";
import { useState } from "react";

export default ({ state, dispatch }: Renderer.Component.Popup.EditApiProps) => {
  const [method, setMethod] = useState<any>(state.editApi.method);
  const [url, setUrl] = useState(state.editApi.url);
  const [name, setName] = useState(state.editApi.name);

  function closePopup() {
    // dispatch(editApiClose());
  }

  return (
    <PopupContainer onClick={closePopup} id={state.editApi.id}>
      <Popup onClick={(e) => e.stopPropagation()}>
        <PopupHeader>
          <PopupSmallTitle>Edit Login</PopupSmallTitle>
          <PopupCloseButton onClick={closePopup}>
            <FaTimes />
          </PopupCloseButton>
        </PopupHeader>
        <PopupBody>
          <EditApi>
            <EditApiSelect
              value={method}
              onChange={(e) => {
                setMethod(e.target.value);
              }}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </EditApiSelect>
            <EditApiTextField
              placeholder="Url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <EditApiTextField
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <EditApiActions>
              <EditApiButton>
                <FaTrash />
              </EditApiButton>
              <EditApiButton>
                <FaSave />
              </EditApiButton>
            </EditApiActions>
          </EditApi>
        </PopupBody>
      </Popup>
    </PopupContainer>
  );
};
