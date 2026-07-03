import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import GrowthPage from "./pages/growthpage";
import SalesPage from "./pages/salespage";
import StockPage from "./pages/stockpage";
import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/Header";
import Settings from "./pages/settings";
import Queries from "./pages/queries";
import UserProfile from "./pages/userProfile";
import Database from "./pages/database";




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
                        <Route path="/queries" element={<Queries/>}/>
                        <Route path="/database" element={<Database/>}/>
                        <Route path="/profile" element={<UserProfile/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}
export default App;
