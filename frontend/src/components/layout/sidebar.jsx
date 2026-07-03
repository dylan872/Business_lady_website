import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  TrendingUp,
  Package,
  ShoppingCart,
  Settings,
  Menu,
  Search,
  User,
  Database
} from "lucide-react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button
        className="sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}
      >
        <Menu size={15} />
      </button>

      <NavLink to="/">
        <Home size={15} />
        {!collapsed && <span>Dashboard</span>}
      </NavLink>

      <NavLink to="/growth">
        <TrendingUp size={15} />
        {!collapsed && <span>Growth</span>}
      </NavLink>

      <NavLink to="/stock">
        <Package size={15} />
        {!collapsed && <span>Stock</span>}
      </NavLink>

      <NavLink to="/sales">
        <ShoppingCart size={15} />
        {!collapsed && <span>Sales</span>}
      </NavLink>
      <NavLink to="/queries">
        <Search size={15}/>
        {!collapsed && <span>Queries</span>}
      </NavLink>
      <NavLink to="/database">
        <Database size={15} />
        {!collapsed && <span>Database</span>}
      </NavLink>
      <NavLink to="/profile">
        <User size={15} />
        {!collapsed && <span>Profile</span>}
      </NavLink>
      <NavLink to="/settings">
        <Settings size={15} />
        {!collapsed && <span>Settings</span>}
      </NavLink>
    </nav>
  );
}

export default Sidebar;