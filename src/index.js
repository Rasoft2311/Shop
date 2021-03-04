import './main.scss';
import ReactLogo from './assets/icons/react-icon.svg';

const App = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '30vh', alignItems: 'center'}}>
      <ReactLogo style={{width: '100px', height: '100px'}}/>
      <p>React App Skeleton</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));