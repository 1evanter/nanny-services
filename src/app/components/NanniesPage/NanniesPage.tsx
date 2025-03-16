"use client"
import React from "react";
import { NanniesCard } from "../NanniesCard/NanniesCard"
import { Nanny } from "@/types/nannies.types";
import { useEffect, useState } from "react";
import styles from "./NanniesPage.module.css"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestoreDB } from "@/app/firebase/config";
import { collection, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { getNannies } from "@/app/(server)/api";

export const NanniesPage = () => {
   const [nannies, setNannies] = useState<Nanny[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loadNannies, setLoadNannies] = useState(3)
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchNannies = async () => {
      const data = await getNannies();
      setNannies(Object.keys(data).map((key) => ({ id: key, ...data[key] })));
    };
    fetchNannies();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchFavorites = async () => {
        const docRef = doc(collection(firestoreDB, "favorites"), user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFavorites(docSnap.data().nannies || []);
        }
      };
      fetchFavorites();
    } else {
      setFavorites([]);
    }
  }, [user]);

  const handleLoadMore = () => {
     setLoadNannies(loadNannies + 3);
  }

  const toggleFavorite = async (id: string) => {
    if (!user) {
      alert("Будь ласка, увійдіть у систему, щоб додати в обране.");
      return;
    }

    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((fav) => fav !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }
    setFavorites(updatedFavorites);

    const docRef = doc(collection(firestoreDB, "favorites"), user.uid);
    if (updatedFavorites.length > 0) {
      await setDoc(docRef, { nannies: updatedFavorites });
    } else {
      await deleteDoc(docRef);
    }
  };

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {nannies.slice(0, loadNannies).map(nanny => (
                    <li key={nanny.id}>
                        <NanniesCard nanny={ nanny}    isFavorite={favorites.includes(nanny.id)} 
  toggleFavorite={toggleFavorite}/>
                  </li>  
                ))}
        </ul>
         {loadNannies < nannies.length && (
        <button
          type="button"
            onClick={handleLoadMore}
            className={styles.button}
        >
          Load more
        </button>
      )}
        </div>
    )
}