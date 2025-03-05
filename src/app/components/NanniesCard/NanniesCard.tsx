import Image from "next/image";
import {Nanny} from "../../../types/nannies.types"
import { NanniesReviews } from "../NanniesReviews/NanniesReviews";

type NannyCardProps = {
  nanny: Nanny;
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

    return (
        <>
            <div>
                  <Image
          src={avatar_url}
          alt="Nanny photo"
          width={40}
          height={40}
                />
                <div>
                    <p>Nanny</p>
                    <div>
                        <p>{location}</p>
                        <p>Rating: {rating}</p>
                        <p>Price / 1 hour: {price_per_hour}</p>
                    </div>
                </div>
                    <p>{name}</p>
                <div>
                    <p>Age: {birthday}</p>
                    <p>Experience: {experience}</p>
                    <p>Kids age: {kids_age}</p>
                    <p>Education: {education}</p>
                    <p>Characters: {characters}</p>
                    <p>{about}</p>
                </div>
                <div>Reviews: {<NanniesReviews reviews={reviews} />}</div>
     </div>
        </>
    )
}
