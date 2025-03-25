"use client";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestoreDB} from "@/app/firebase/config";
import { collection, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { NanniesCard } from "../NanniesCard/NanniesCard";
import { Nanny } from "@/types/nannies.types";
import { getFilteredNannies, getNannies } from "@/app/(server)/api";
import styles from "./FavoritesPage.module.css"
import { Filter } from "../Filter/Filter";
import { SelectChangeEvent } from "@mui/material";
import { useRouter } from "next/navigation";

export const FavoritesPage = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [nannies, setNannies] = useState<Nanny[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
const [loadNannies, setLoadNannies] = useState(3);
  const [filter, setFilter] = useState("");
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

  const handleFilter = (e: SelectChangeEvent) => {
    setFilter(e.target.value);
    setLoadNannies(3);
  };

  const handleLoadMore = () => {
    setLoadNannies(loadNannies + 3);
  };

  const toggleFavorite = async (id: string) => {
    if (!user) {
      router.push('/sign-in');
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

 const filteredNannies = getFilteredNannies(
    nannies.filter((nanny) => favorites.includes(nanny.id)),
    filter
  );

  return (
    <div className={styles.container}>
       <Filter handleFilter={handleFilter} filter={filter} />
          <ul className={styles.list}>
      {filteredNannies.slice(0, loadNannies).map((nanny) => (
            <li   key={nanny.id}>
           <NanniesCard 
  nanny={nanny} 
  isFavorite={favorites.includes(nanny.id)} 
  toggleFavorite={toggleFavorite} 
                          />
                      </li>
      ))}</ul>
       {loadNannies < filteredNannies.length && (
        <button type="button" onClick={handleLoadMore} className={styles.button}>
          Load more
        </button>
      )}
    </div>
  );
}
