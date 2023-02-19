import {
  ApiManagerContainer,
  ApiManagerHeader,
  ApiManagerHeaderTitle,
  ApiManagerHeaderActions,
  ApiManagerHeaderAction,
} from './styles';

export default () => {
  return (
    <ApiManagerContainer>
      <ApiManagerHeader>
        <ApiManagerHeaderTitle>A Title</ApiManagerHeaderTitle>
        <ApiManagerHeaderActions>
          <ApiManagerHeaderAction>Add</ApiManagerHeaderAction>
          <ApiManagerHeaderAction>Remove</ApiManagerHeaderAction>
        </ApiManagerHeaderActions>
      </ApiManagerHeader>
    </ApiManagerContainer>
  );
};
