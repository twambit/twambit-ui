import { createRoot } from "react-dom/client";
import './index.css'; // This is the most common approach.
import App from "./App.jsx";
import {store} from './app/store.ts';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
  <App />
</Provider>
);