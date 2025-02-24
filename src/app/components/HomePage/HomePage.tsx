import Link from "next/link"
import { Header } from "../Header/Header"

export const HomePage = () => {
    return (
        <>
            <Header/>
            <div>
        <h2>Make Life Easier for the Family: <span>Find Babysitters Online for All Occasions</span></h2>
        <Link href="/nannies">Get Started</Link>
            </div>
        </>
    )
}