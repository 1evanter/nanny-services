import Image from "next/image";
import {Nanny} from "../../../types/nannies.types"
import { NanniesReviews } from "../NanniesReviews/NanniesReviews";
import styles from "./NanniesCard.module.css"

type NannyCardProps = {
  nanny: Nanny;
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

export const NanniesCard = ({nanny}: NannyCardProps) => {
    
    const {
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
                <div
                    // className={styles.infoContainer}
                >
                <div className={styles.basicInfoContainer}>
                   <p className={styles.name}><span>Nanny</span> <br />{name}</p>
                    <div className={styles.basicInfo}>
                        <p>{location}</p>
                        <p>Rating: {rating}</p>
                        <p>Price / 1 hour: {price_per_hour}</p>
                    </div>
                </div>
                   
                <div className={styles.mainInfo}>
                    <p>Age: {age}</p>
                    <p>Experience: {experience}</p>
                    <p>Kids age: {kids_age}</p>
                    <p>Education: {education}</p>
                    <p>Characters: {characters}</p>
                    <p>{about}</p>
                </div>
                    <div>Reviews: {<NanniesReviews reviews={reviews} />}</div>
                    </div>
     </div>
        </>
    )
}
