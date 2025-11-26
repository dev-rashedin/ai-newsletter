"use client"
import {User, Session} from "@supabase/supabase-js"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { createClient } from "../lib/supabase/client";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)


export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);


  const supabase = createClient()
  
  useEffect(() => {
    // getting initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // listening for auth changes
    const {data: { subscription }} = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    }) 

    return () => subscription.unsubscribe();

  }, [supabase.auth]);


  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setUser(null);
  }
  
  const value = {
    user,
    session,
    loading,
    signOut
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context
}

