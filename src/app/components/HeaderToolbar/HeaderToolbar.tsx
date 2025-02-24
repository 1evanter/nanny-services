import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config"
import { signOut } from "firebase/auth";
import Link from "next/link";

export const HeaderToolbar = () => {
    const [user] = useAuthState(auth);
    const userSession = sessionStorage.getItem('user')
   
    if (!user && !userSession) {
        return (
            <div>
                <Link href="/sign-in">Log In</Link>
                <Link href="/sign-up">Registration</Link>
          </div>
      )
    } else {
  return (
            <div>
                <button>User</button>
                <button onClick={() => {
                    signOut(auth)
                    sessionStorage.removeItem('user')
                }
                }>Log Out</button>
            </div>
        )
    }
}