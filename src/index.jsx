import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view"
import "./index.scss";
import { Container } from "react-bootstrap";

// Main component
const MyCinemaApplication = () => {
    return (<Container><MainView /></Container>);
};

// Find root of app
const container = document.querySelector("#root");
const root = createRoot(container);

// Render app in the root DO element
root.render(<MyCinemaApplication />);