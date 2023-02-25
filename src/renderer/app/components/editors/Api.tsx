import { useState } from 'react';
import { addApi, toggleApiEditor, editApi } from 'renderer/reducers/reducer';
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
  EditorSelectInput,
  EditorTextInput,
} from './styles';

const methods = ['POST', 'GET', 'PUT', 'DELETE'];

const contentTypes = [
  'application/json',
  'application/xml',
  'application/x-www-form-urlencoded',
];

const connections = ['keep-alive', 'close'];

export default ({ state, dispatch }: Renderer.Components.Props) => {
  const [method, setMethod] = useState(
    state.apiEditorData?.method || methods[0]
  );
  const [name, setName] = useState(state.apiEditorData?.name || '');
  const [url, setUrl] = useState(state.apiEditorData?.url || '');
  const [contentType, setContentType] = useState(
    state.apiEditorData?.contentType || contentTypes[0]
  );
  const [connection, setConnection] = useState(
    state.apiEditorData?.connection || connections[0]
  );
  const [error, setError] = useState<string | null>(null);

  function save() {
    // Check values aren't empty
    if (name === '') {
      setError('Name cannot be empty');
      return;
    }
    if (url === '') {
      setError('Url cannot be empty');
      return;
    }
    // Check Url is valid
    if (!url.match(/^https?:\/\//) || !url.match(/^http?:\/\//)) {
      setError('Url is not valid');
      return;
    }
    // Add data to store
    if (state.isCreatingApi === true) {
      console.log('Creating API');
      dispatch(
        addApi({
          id: state.apis.length > 0 ? state.apis.length + 1 : 0,
          method: method,
          name: name,
          url: url,
          contentType: contentType,
          connection: connection,
          status: 'Unknown',
        })
      );
    } else {
      if (state.apiEditorData) {
        console.log('Editing API');
        console.log(name);

        const apis: any = [];
        state.apis.forEach((api) => {
          if (api.id === state.apiEditorData?.id) {
            apis.push({
              id: api.id,
              method: method,
              name: name,
              url: url,
              contentType: contentType,
              connection: connection,
              status: api.status,
            });
          } else {
            apis.push(api);
          }
        });
        dispatch(editApi(apis));
      }
    }
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
        </EditorBody>
        <EditorFooter>
          {error !== null && <EditorFooterError>{error}</EditorFooterError>}
          <EditorFooterButton onClick={() => dispatch(toggleApiEditor(null))}>
            Cancel
          </EditorFooterButton>
          <EditorFooterButton onClick={save}>Save</EditorFooterButton>
        </EditorFooter>
      </Editor>
    </EditorContainer>
  );
};
