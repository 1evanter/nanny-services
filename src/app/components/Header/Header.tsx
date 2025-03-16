"use client"
import clsx from 'clsx';
import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config"
import { HeaderToolbar } from "../HeaderToolbar/HeaderToolbar";
import styles from "./Header.module.css"

export const Header = ({isMainPage}: { isMainPage: boolean }) => {
  const [user] = useAuthState(auth);

    return (
         <header className={clsx({
      [styles.mainHeader]: isMainPage,
      [styles.defaultHeader]: !isMainPage,
    })}>
            <div className={styles.container}>
            <h1 className={styles.title}>
               <Link href="/">Nanny.Services</Link> </h1>
            <nav>
                <ul className={styles.list}>
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
           </div>
        </header>
    )
}