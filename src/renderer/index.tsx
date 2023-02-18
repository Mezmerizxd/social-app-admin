import { createRoot } from 'react-dom/client';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import App from './app';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Provider>
  </Router>
);
