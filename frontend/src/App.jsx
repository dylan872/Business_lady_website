import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import GrowthPage from "./pages/growthpage";
import SalesPage from "./pages/salespage";
import StockPage from "./pages/stockpage";
import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/Header";




function App(){
    return(
        <BrowserRouter>
            <div className="App-layout">
                <Sidebar/>
                <div className="main-content">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/growth" element={<GrowthPage/>}/>
                        <Route path="/stock" element={<StockPage/>}/>
                        <Route path="/sales" element={<SalesPage/>}/>
                </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}
export default App;
