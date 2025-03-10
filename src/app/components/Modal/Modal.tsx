"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [router]);

   return (
        <div className={styles.overlay} onClick={() => router.back()}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
                <button className={styles.closeButton} onClick={() => router.back()}>
                    <Image src="/icons/x.svg" alt="close modal" width={32} height={32} />
                </button>
            </div>
        </div>
    );
};


    
   
