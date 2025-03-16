import Link from "next/link"
import Image from 'next/image';
import styles from "./HomePage.module.css"

export const HomePage = () => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>   
        <h2 className={styles.title}>Make Life Easier for the Family: </h2><p className={styles.subtitle}>Find Babysitters Online for All Occasions</p>
                <Link href="/nannies" className={styles.link}>Get Started <Image src='/icons/arrow.svg' alt="get started icon" width={18} height={18} /> </Link>       
            </div>
            <Image src="/images/hero-image.jpg" alt="Woman with baby reading book" width={700} height={736}/>               
            <div className={styles.amountBox}>
                <div className={styles.iconBox}><Image src="/icons/check.svg" alt="check icon" width={20} height={15} /></div>
           <div className={styles.textBox}> <p>Experienced nannies</p><p className={styles.amount}>15,000</p></div></div>
        </div>
    )
}