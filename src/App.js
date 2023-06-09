/* eslint-disable no-lone-blocks */
import Main from "./components/main";
import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <div className="flex w-[100%]">
            <div className="w-[14%] border-r border-lightBorderColor bg-lightBgColor">
                <Sidebar />
            </div>
            <div className="w-[86%]">
                <Main />
            </div>
        </div>
    </BrowserRouter>
    
  );
}

export default App;

        
        
