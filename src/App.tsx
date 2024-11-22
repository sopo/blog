import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home/home";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import About from "./pages/about/about";
import Author from "./pages/author/author";
import Profile from "./pages/profile/profile";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/en" />} />
      <Route path=":lang" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="profile" element={<Profile />} />
        <Route path="author/:id" element={<Author />} />
      </Route>
    </Route>
    
  ),

);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
