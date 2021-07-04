import './App.css';
import SideBar from './Layout/SideBar';
import Content from './Layout/Content';
import Styles from './Layout/SideBar.module.css';
import Style from './Layout/Content.module.css';

function App() {
  return (
    <div className="App container mx-auto mt-10">
      <div className="grid grid-cols-12">
        <div className={Styles.sidebarDiv + " col-span-3"}>
          <SideBar />
        </div>
        <div className={Style.background + " col-span-9"}>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
