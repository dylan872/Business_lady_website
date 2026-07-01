import {NavLink} from "react-router-dom";

function Sidebar(){
    return(
        <nav classname="sidebar">
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/growth">Growth</NavLink>
            <NavLink to="/stock">Stock</NavLink>
            <NavLink to="/sales">Sales</NavLink>
        </nav>
    );
}
export default Sidebar;