"use client";

import { useEffect } from "react";
import {  useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
  toggleModalOpen?: () => void;
  isModalOpen?: boolean;
  stayOnPage?: boolean;
};

export const Modal = ({ children, toggleModalOpen, isModalOpen, stayOnPage }: ModalProps) => {
  const router = useRouter();

  const closeModal = () => {
    if (toggleModalOpen) {
    toggleModalOpen() 
    } else {
      router.back()
  }
  }

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
        document.documentElement.style.overflow = '';
      document.removeEventListener("keydown", handleEscape)
    }
     
  }, [isModalOpen]);

   const handleClose = () => {
        document.body.classList.remove("modal-open");

        if (stayOnPage && toggleModalOpen) {
            toggleModalOpen();
        } else {
            router.back();
        }
    };

   return (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
                <button className={styles.closeButton} onClick={handleClose}>
                    <Image src="/icons/x.svg" alt="close modal" width={32} height={32} />
                </button>
            </div>
        </div>
    );
};
   
