import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent.js';
import ClassComponent from './Components/ClassComponent.js';
import HomeComponent from './Components/BaiTapComponent/HomeComponent.js';
import DataBinding from './DataBinding/DataBinding.js';
import HandleEvent from './HandleEvent/HandleEvent.js';
import StyleComponent from './StyleComponent/StyleComponent.js';
import StateDemo from './StateDemo/StateDemo.js';
import ChangeFontSize from './StateDemo/ChangeFontSize.js';


function App() {
  return (
    <div className="App container">
      {/* Hello DN05
      <FunctionComponent/>
      <FunctionComponent/>
      <FunctionComponent/>

      <FunctionComponent/><FunctionComponent/>

      <ClassComponent/>
      <ClassComponent/>
      <ClassComponent/> */}

      {/* <HomeComponent/> */}

      {/* <DataBinding/> */}

      {/* <HandleEvent/> */}

      {/* <StyleComponent/> */}

      {/* <h1 className='styleText'>Demo style component 123</h1> */}

      <StateDemo/>

      <ChangeFontSize/>
    </div>
  );
}

export default App;
