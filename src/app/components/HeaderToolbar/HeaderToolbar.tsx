import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config"
import { signOut } from "firebase/auth";
import Link from "next/link";
import styles from "./HeaderToolbar.module.css"
import { useEffect, useState } from "react";
import Image from "next/image";

export const HeaderToolbar = () => {
  const [user] = useAuthState(auth);
  const [storedUser, setStoredUser] = useState<string | null>(null);

   useEffect(() => {
    const userSession = sessionStorage.getItem('user')
    setStoredUser(userSession);
  }, []);
   
   
    if (!user && !storedUser) {
        return (
            <div className={styles.buttonsContainer}>
                <Link href="/sign-in" className={styles.link}>Log In</Link>
                <Link href="/sign-up" className={styles.link}>Registration</Link>
          </div>
      )
    } else {
  return (
            <div className={styles.buttonsContainer}>
          <div className={styles.profile}> <Image src="/icons/profile.svg" alt="profile icon" width={40} height={40}/> <p>{ user?.displayName}</p></div>
                <button className={styles.link} onClick={() => {
              signOut(auth);
          
                }
                }>Log Out</button>
            </div>
        )
    }
}