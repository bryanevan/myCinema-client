import { createRoot } from 'react-dom/client'; //import state indicating required bundling ./index.css
import './index.scss';

//main component
const MyCinemaApplication = () => { 
    return (
        <div className = 'my-cinema'>
            <div>Aloha</div>
        </div>
    );
};

//finds root of app
const container = document.querySelector('#root');
const root = createRoot(container);

//tells React to render app in root DOM element
root.render(<MyCinemaApplication/>);
