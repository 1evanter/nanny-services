"use client";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestoreDB} from "@/app/firebase/config";
import { collection, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { NanniesCard } from "../NanniesCard/NanniesCard";
import { Nanny } from "@/types/nannies.types";
import { getNannies } from "@/app/(server)/api";


export const FavoritesPage = () => {
  const [user] = useAuthState(auth);
  const [nannies, setNannies] = useState<Nanny[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

   useEffect(() => {
    const fetchNannies = async () => {
      const nanniesData = await getNannies();
      setNannies(Object.keys(nanniesData).map((key) => ({ id: key, ...nanniesData[key] })));
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

  const docRef = doc(firestoreDB, "favorites", user.uid);
    if (updatedFavorites.length > 0) {
      await setDoc(docRef, { nannies: updatedFavorites });
    } else {
      await deleteDoc(docRef);
    }
  };

  return (
    <div>
          <h1>Обрані няні</h1>
          <ul>
      {nannies
        .filter((nanny) => favorites.includes(nanny.id))
                  .map((nanny) => (
            <li   key={nanny.id}>
           <NanniesCard 
  nanny={nanny} 
  isFavorite={favorites.includes(nanny.id)} 
  toggleFavorite={toggleFavorite} 
                          />
                      </li>
        ))}</ul>
    </div>
  );
}
