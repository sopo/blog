import "./App.css";
import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { useAtomValue, useSetAtom } from "jotai";
import { UserAtom, ProfileAtom } from "./store/auth";
import { router } from "./routes/routes";

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
      } catch {
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
