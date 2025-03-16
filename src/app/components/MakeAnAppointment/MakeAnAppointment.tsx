import { Nanny } from "@/types/nannies.types"
import styles from "./MakeAnApointment.module.css"
import Image from "next/image";

type MakeAnAppointmentProps = {
    nanny: Nanny;
}

export const MakeAnAppointment = ({ nanny:{ name,
        avatar_url} }: MakeAnAppointmentProps) => {
    return (
        <div> 
            <h2 className={styles.title}>Make an appointment with a babysitter</h2>
            <p className={styles.subtitle}>Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner.</p>
            <div className={styles.nannyBox}>
                <Image src={avatar_url} alt={`${name} photo`} width={44} height={44} />
                <div>
                    <p className={styles.yourNanny}>Your nanny</p>
                    <p className={styles.nannyName}>{name}</p>
                </div>
            </div>
        <form className={styles.form}>
                <input type="text" placeholder="Address"/>
                <input type="number" placeholder="Child's age"/>
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Father's or mother's name" />
                <input type="text" placeholder="Comment" />
                <button className={styles.submit} type="submit">Send</button>
       </form>
        </div>
    )
}