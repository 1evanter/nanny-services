"use client"

import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config"
import { HeaderToolbar } from "../HeaderToolbar/HeaderToolbar";

export const Header = () => {
  const [user] = useAuthState(auth);

    return (
        <header>
            <h1>
               <Link href="/">Nanny.Services</Link> </h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/nannies">Nannies</Link>
                    </li>
                    {user &&  <li>
                        <Link href="/favorites">Favorites</Link>
                    </li>}
                </ul>
            </nav>

            <HeaderToolbar/>
           
        </header>
    )
}