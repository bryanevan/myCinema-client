import {createRoot} from "react-dom/client";
import {MainView} from "./components/main-view/main-view";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";

import { createRoot } from 'react-dom/client'; //import state indicating required bundling ./index.css
import { MainView } from './components/main-view/main-view';
import './index.scss';

//main component
const App = () => { 
    return (
        <Container style={{border:"2px solid purple"}}>
          <MainView />
        </Container>
      );
    };    

//finds root of app
const container = document.querySelector('#root');
const root = createRoot(container);

//tells React to render app in root DOM element
root.render(<App />);

