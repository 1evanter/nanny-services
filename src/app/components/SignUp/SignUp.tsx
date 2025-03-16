"use client"
import { useForm } from "react-hook-form"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import {auth} from '@/app/firebase/config'
import { useRouter } from "next/navigation"
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
    } = useForm<Inputs>();
    
    
  const onSubmit = async ({email, password}: Inputs) => {
    try {
        const res = await createUserWithEmailAndPassword(email, password);  
        console.log(res)
     router.push("/");   
    } catch (error) {
      alert(error);
    }
  };


  return (
    <div>
    <h2 className={styles.title}>Registration</h2>
    <p className={styles.subtitle}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
 
          <input {...register("name")} placeholder="Name" />
      <input {...register("email")} placeholder="Email"/>
      <input {...register("password")} placeholder="Password"/>

      {errors.password && <span>This field is required</span>}

      <button className={styles.submit} type="submit">
        Sign Up
      </button>
      </form>
    </div>
  )
}