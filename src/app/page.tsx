"use client"
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "@/app/firebase/config"
import { HomePage } from "./components/HomePage/HomePage";

export default function Home() {
  const [user] = useAuthState(auth);
  console.log({ user });

  return (
<HomePage/>
  );
}
