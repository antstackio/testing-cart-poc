import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="nav-list-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-list-item">
            <a className="nav-list-link" href="/add/two">
              Add Two Numbers
            </a>
          </li>
        </ul>
      </nav>
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  );
}

export default App;
