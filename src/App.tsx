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
import SignIn from "./pages/sign-in";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Navigate to="/en"/>} />
      <Route path=":lang" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="sign-up" element={<SignIn />} />
    </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
