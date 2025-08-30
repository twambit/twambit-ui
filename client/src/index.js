import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // This is the most common approach.
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<BrowserRouter>
<App />
</BrowserRouter>
);