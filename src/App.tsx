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
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import GuestGuard from "./components/guards/guest-guard";
import LoggedInGuard from "./components/guards/logged-in-guard";
import { useAtomValue, useSetAtom } from "jotai";
import { UserAtom, ProfileAtom } from "./store/auth";
import Write from "./pages/write/write";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/en" />} />
      <Route path=":lang" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route element={<LoggedInGuard />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route element={<GuestGuard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="write" element={<Write />} />
        </Route>
        <Route path="author/:id" element={<Author />} />
      </Route>
    </Route>,
  ),
);
function App() {
  const setUser = useSetAtom(UserAtom);
  const user = useAtomValue(UserAtom);
  const setProfile = useSetAtom(ProfileAtom);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  useEffect(() => {
    const userId = user?.user.id;

    const fetchUser = async () => {
      if (!userId) {
        return;
      }

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select()
          .eq("id", userId)
          .single();

        if (error) throw error;
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile");
      }
    };

    fetchUser();
  }, [user, setProfile]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <RouterProvider router={router} />;
}

export default App;
