"use client";

import { useForm } from "react-hook-form";
import {auth} from '@/app/firebase/config'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import styles from "./SignIn.module.css"

type Inputs = {
  email: string;
  password: string;
};

export const SignIn = () => {
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async ({email, password}: Inputs) => {
    try {
        const res = await signInWithEmailAndPassword(email, password);
        console.log(res)
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
          <h2 className={styles.title}>Log In</h2>
          <p>Welcome back! Please enter your credentials to access your account and continue your babysitter search.</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email"/>
      <input {...register("password")} placeholder="Password"/>
        {errors.password && <p>{errors.password.message}</p>}

        <button className={styles.submit} type="submit">Log In</button>
      </form>
    </div>
  );
}