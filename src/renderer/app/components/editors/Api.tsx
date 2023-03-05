import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toggleApiEditor } from "../../../reducers/reducer";
import {
  Editor,
  EditorBody,
  EditorContainer,
  EditorDualInput,
  EditorFooter,
  EditorFooterButton,
  EditorFooterError,
  EditorHeader,
  EditorHeaderTitle,
  EditorLabelledInput,
  EditorSelectInput,
  EditorTextInput,
  EditorJsonBodyEditor,
} from "./styles";

const methods = ["POST", "GET", "PUT", "DELETE"];

const contentTypes = [
  "application/json",
  "application/xml",
  "application/x-www-form-urlencoded",
];

const connections = ["keep-alive", "close"];

export default ({ state, dispatch }: Renderer.Component.Props) => {
  const [method, setMethod] = useState(
    state.apiEditorData?.method || methods[0]
  );
  const [name, setName] = useState(state.apiEditorData?.name || "");
  const [url, setUrl] = useState(state.apiEditorData?.url || "");
  const [contentType, setContentType] = useState(
    state.apiEditorData?.contentType || contentTypes[0]
  );
  const [connection, setConnection] = useState(
    state.apiEditorData?.connection || connections[0]
  );
  const [body, setBody] = useState(state.apiEditorData?.body || "");
  const [error, setError] = useState<string | null>(null);

  function save() {
    // Check values aren't empty
    if (name === "") {
      setError("Name cannot be empty");
      return;
    }
    if (url === "") {
      setError("Url cannot be empty");
      return;
    }
    // Check Url is valid
    if (!url.match(/^https?:\/\//) || !url.match(/^http?:\/\//)) {
      setError("Url is not valid");
      return;
    }
    // Add data to store
    if (state.isCreatingApi === true) {
      // Create Api
      window.api.appManager.createApi({
        id: state.apis?.length > 0 ? state.apis.length + 1 : 0,
        method,
        name,
        url,
        contentType,
        connection,
        body,
        status: 0,
      });
    } else {
      if (state.apiEditorData) {
        // Edit Api
        window.api.appManager.editApi({
          id: state.apiEditorData.id,
          method,
          name,
          url,
          contentType,
          connection,
          body,
          status: 0,
        });
      }
    }
    dispatch(toggleApiEditor({ type: "close" }));
    return;
  }

  return (
    <EditorContainer>
      <Editor>
        <EditorHeader>
          <EditorHeaderTitle>Edit</EditorHeaderTitle>
        </EditorHeader>
        <EditorBody>
          <EditorDualInput>
            <EditorSelectInput
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              {methods.map((method, i) => (
                <option key={i} value={method}>
                  {method}
                </option>
              ))}
            </EditorSelectInput>
            <EditorTextInput
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </EditorDualInput>
          <EditorTextInput
            placeholder="Url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <EditorSelectInput
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
          >
            {contentTypes.map((contentType, i) => (
              <option key={i} value={contentType}>
                Content-Type: {contentType}
              </option>
            ))}
          </EditorSelectInput>
          <EditorSelectInput
            value={connection}
            onChange={(e) => setConnection(e.target.value)}
          >
            {connections.map((conn, i) => (
              <option key={i} value={conn}>
                Connection: {conn}
              </option>
            ))}
          </EditorSelectInput>
          <EditorLabelledInput>
            <label htmlFor="codeEditor">Request</label>
            <EditorJsonBodyEditor
              id="codeEditor"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </EditorLabelledInput>
        </EditorBody>
        <EditorFooter>
          {error !== null && <EditorFooterError>{error}</EditorFooterError>}
          <EditorFooterButton
            onClick={() => {
              window.api.appManager.deleteApi(state.apiEditorData);
              dispatch(toggleApiEditor({ type: "close" }));
            }}
          >
            <FaTrash />
          </EditorFooterButton>
          <EditorFooterButton
            onClick={() => dispatch(toggleApiEditor({ type: "close" }))}
          >
            Cancel
          </EditorFooterButton>
          <EditorFooterButton onClick={save}>Save</EditorFooterButton>
        </EditorFooter>
      </Editor>
    </EditorContainer>
  );
};
