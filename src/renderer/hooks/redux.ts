import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => Renderer.Hooks.ReduxDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<Renderer.Hooks.ReduxSelector> =
  useSelector;
