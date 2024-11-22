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
import { useEffect } from "react";
import { supabase } from "./supabase";
import AuthGuard from "./components/guards/auth";
import { useSetAtom } from "jotai";
import { UserAtom } from "./store/auth";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/en" />} />
      <Route path=":lang" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route element={<AuthGuard />}>
        <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="author/:id" element={<Author />} />
      </Route>
    </Route>
    
  ),

);
function App() {
  const setUser = useSetAtom(UserAtom)
 

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setUser(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session)
      })

      return () => subscription.unsubscribe()
    }, [setUser])
  return <RouterProvider router={router} />;
}

export default App;
