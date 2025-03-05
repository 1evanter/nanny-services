"use client"

import { NanniesCard } from "../NanniesCard/NanniesCard"
import { Nanny } from "@/types/nannies.types";
import { useEffect, useState } from "react";

type NanniesProps = {
  initialData: Nanny[];
};


export const NanniesPage = ({ initialData }: NanniesProps) => {
  const [nannies, setNannies] =
    useState<Nanny[]>(initialData);

  useEffect(() => {
    setNannies(initialData || []);
  }, [initialData]);


    return (
        <div>
            <ul>
                {nannies.map(nanny => (
                    <li key={nanny.id}>
                        <NanniesCard nanny={ nanny} />
                  </li>  
                ))}
            </ul>
        </div>
    )
}