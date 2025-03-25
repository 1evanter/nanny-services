"use client";

import { useForm } from "react-hook-form";
import {auth} from '@/app/firebase/config'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { schema } from "@/schemes/signIn"
import {yupResolver} from "@hookform/resolvers/yup"
import styles from "./SignIn.module.css"
import Link from "next/link";

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
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({email, password}: Inputs) => {
    try {
        const res = await signInWithEmailAndPassword(email, password);
        if (res?.user) {
      router.push("/");
    }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
          <h2 className={styles.title}>Log In</h2>
          <p className={styles.subtitle}>Welcome back! Please enter your credentials to access your account and continue your babysitter search.</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="Email" />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      <input {...register("password")} placeholder="Password"/>
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}

       <Link href="/sign-up"><p className={styles.text}>Do not have an account yet? Click here to register</p></Link> 

        <button className={styles.submit} type="submit">Log In</button>
      </form>
    </div>
  );
}