import { createRoot } from 'react-dom/client'; //import state indicating required bundling ./index.css
import { MainView } from './components/main-view/main-view';
import './index.scss';

//main component
const App = () => { 
    return <MainView />;
};

//finds root of app
const container = document.querySelector('#root');
const root = createRoot(container);

//tells React to render app in root DOM element
root.render(<App/>);
