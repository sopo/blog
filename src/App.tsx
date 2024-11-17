import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="sign-up" element={<SignUp />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
