import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Navigate to="/en"/>} />
      <Route path=":lang" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="sign-up" element={<SignUp />} />
    </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
