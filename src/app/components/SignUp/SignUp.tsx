"use client"
import { useForm } from "react-hook-form"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import {auth} from '@/app/firebase/config'
import { useRouter } from "next/navigation"

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
        sessionStorage.setItem('user', 'true')
     router.push("/");   
    } catch (error) {
      alert(error);
    }
  };


  return (
 
      <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Registration</h2>
          <p>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
 
          <input {...register("name")} placeholder="Name" />
      <input {...register("email")} placeholder="Email"/>
      <input {...register("password")} placeholder="Password"/>

      {errors.password && <span>This field is required</span>}

      <button type="submit">
        Sign Up
      </button>
    </form>
  )
}