import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config"
import { signOut } from "firebase/auth";
import Link from "next/link";
import styles from "./HeaderToolbar.module.css"

export const HeaderToolbar = () => {
    const [user] = useAuthState(auth);
    console.log(user?.uid)
    const userSession = sessionStorage.getItem('user')
   
    if (!user && !userSession) {
        return (
            <div className={styles.buttonsContainer}>
                <Link href="/sign-in" className={styles.link}>Log In</Link>
                <Link href="/sign-up" className={styles.link}>Registration</Link>
          </div>
      )
    } else {
  return (
            <div className={styles.buttonsContainer}>
          <button>{ user?.uid}</button>
                <button onClick={() => {
              signOut(auth);
          
                }
                }>Log Out</button>
            </div>
        )
    }
}