import { Nanny } from "@/types/nannies.types"
import styles from "./MakeAnApointment.module.css"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { schema } from "@/schemes/appointment";

type MakeAnAppointmentProps = {
    nanny: Nanny;
   toggleModalOpen: () => void;

}

type Inputs = {
    address: string;
    age: string;
    phone: string;
    email: string;
  name: string;
  time: string;
  comment?: string;
};

export const MakeAnAppointment = ({toggleModalOpen, nanny: { name,
    avatar_url } }: MakeAnAppointmentProps) => {
    
       const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<Inputs>({
    defaultValues: {
      phone: '+380',
    },
    resolver: yupResolver(schema),
  });

    const submitForm = () => {
     
   
      alert('Thank you for making the appointment!')
        toggleModalOpen();
    };

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
        <form onSubmit={handleSubmit(submitForm)} className={styles.form}>
                <input  {...register('address')} type="text" placeholder="Address" />
                {errors.address && <p className={styles.error}>{errors.address.message}</p>}
                <input  {...register('age')} type="number" placeholder="Child's age"/>
                {errors.age && <p className={styles.error}>{errors.age.message}</p>}
                <input  {...register('email')} type="email" placeholder="Email"/>
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                <input  {...register('name')} type="text" placeholder="Father's or mother's name" />
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                <input  {...register('phone')} type="text" placeholder="Phone" />
                {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                 <input
              {...register('time')}
              placeholder="00:00"
              type="time"
              className={styles.time}
                />
                {errors.time && <p className={styles.error}>{errors.time.message}</p>}
                <input type="text" placeholder="Comment" />
                <button className={styles.submit} type="submit">Send</button>
       </form>
        </div>
    )
}