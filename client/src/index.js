import { createRoot } from "react-dom/client";
import './index.css'; // This is the most common approach.
import App from "./App";


const root = createRoot(document.getElementById("root"));
root.render(<App />);