"use client"
import { useForm } from "react-hook-form"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import {auth} from '@/app/firebase/config'
import { useRouter } from "next/navigation"
import { schema } from "@/schemes/signUp"
import { yupResolver } from "@hookform/resolvers/yup"
import { updateProfile } from "firebase/auth";
import styles from "./SignUp.module.css"

type Inputs = {
    name: string;
    email: string;
    password: string;
}

export const SignUp = () => {
const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
const router = useRouter();
    
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
    
  const onSubmit = async ({ name, email, password }: Inputs) => {
    const res = await createUserWithEmailAndPassword(email, password);
    if (res?.user) {
      await updateProfile(res.user, { displayName: name });
      router.push("/");
    }
  };


  return (
    <div>
    <h2 className={styles.title}>Registration</h2>
    <p className={styles.subtitle}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
 
        <input {...register("name")} placeholder="Name" />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        <input {...register("email")} placeholder="Email" />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        <input {...register("password")} placeholder="Password" />
           {errors.password && <p className={styles.error}>{errors.password.message}</p>}

      <button className={styles.submit} type="submit">
        Sign Up
      </button>
      </form>
    </div>
  )
}