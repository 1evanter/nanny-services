import Image from "next/image";
import {Nanny} from "../../../types/nannies.types"
import { NanniesReviews } from "../NanniesReviews/NanniesReviews";
import styles from "./NanniesCard.module.css"
import { useState } from "react";

type NannyCardProps = {
    nanny: Nanny;
      isFavorite: boolean;
  toggleFavorite: (id: string) => void;
};

const getAge = (dateString: string): number => {
  const birthDate = new Date(dateString);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  return (today.getMonth() > birthDate.getMonth() || 
          (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())) 
    ? age 
    : age - 1;
};

export const NanniesCard = ({nanny, toggleFavorite, isFavorite}: NannyCardProps) => {
    
    const {
        id,
    name,
        avatar_url,
    birthday,
        experience,
    education,
    kids_age,
    price_per_hour,
    location,
    about,
    characters,
    rating,
    reviews,
  } = nanny;

    const [showReviews, setShowReviews] = useState(false);
    const age = getAge(birthday);
    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
          src={avatar_url}
          alt="Nanny photo"
          width={96}
          height={96}
                    />
                </div>
                <div>
                <div className={styles.basicInfoContainer}>
                        <div> <p>Nanny </p><p className={styles.name}>{name}</p></div>
                        <div className={styles.box}>
                    <div className={styles.basicInfo}>
                        <Image className={styles.icon} src="/icons/map.svg" alt="map pin icon" width={16} height={16}/> <p>{location}</p> <span className={styles.line}>|</span>
                   <Image className={styles.icon} src="/icons/star.svg" alt="star icon" width={16} height={16}/>   <p>Rating: {rating}</p> <span className={styles.line}>|</span>
                        <p>Price / 1 hour: <span className={styles.price}>{price_per_hour}$</span></p>
                        </div>
                            <button onClick={() => toggleFavorite?.(id)} className={styles.favoriteIcon} type="button"><Image src={isFavorite ? "/icons/full-heart.svg" : "/icons/heart.svg" }alt="favorite icon" width={26} height={26} /></button>
                            </div>
                </div>
                   
                <div className={styles.mainInfo}>
                    <p>Age: <span className={styles.age}>{age}</span></p>
                    <p>Experience: <span>{experience}</span></p>
                    <p>Kids age: <span>{kids_age}</span></p>
                    <p>Education: <span>{education}</span></p>
                    <p>Characters: {characters.map((item, index) => (
  <span key={index}>{item}{index < characters.length - 1 ? ", " : ""}</span>
))}</p>
                </div>
                    <p className={styles.about}>{about}</p>

                    {showReviews ? 
                        <NanniesReviews reviews={reviews} nanny={ nanny} />    
               :  <button type="button" className={styles.button} onClick={() => setShowReviews(true)}>Read more</button> }                  
                    </div>
     </div>
        </>
    )
}
