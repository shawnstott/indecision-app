console.log('build-it-visible.js is running');

const app = {
    title: 'Visibility Toggle',
    subtitle: 'Here is some awesome text to display',
    buttontitlehidden: 'Show details',
    buttontitleshowing: 'Hide details'
};

const appRoot = document.getElementById('app');

let isDisplayed = false;

const onToggleDisplay = () => {
    isDisplayed = !isDisplayed;
    render();
};


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>       
            <button onClick={onToggleDisplay}>{app.buttontitlehidden}</button>
            <p>{isDisplayed ? app.subtitle : ''}</p>   
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();