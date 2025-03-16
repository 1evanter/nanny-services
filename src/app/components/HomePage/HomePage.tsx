import Link from "next/link"
import Image from 'next/image';
import styles from "./HomePage.module.css"

export const HomePage = () => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>   
        <h2 className={styles.title}>Make Life Easier for the Family: <br/> <span className={styles.span}>Find Babysitters Online for All Occasions</span></h2>
                <Link href="/nannies" className={styles.link}>Get Started <Image src='/icons/arrow.svg' alt="get started icon" width={18} height={18} /> </Link>       
            </div>
                <Image src="/images/hero-image.jpg" alt="Woman with baby reading book" width={700} height={736} />               
        </div>
        
    )
}