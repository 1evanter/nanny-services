import { Review } from "@/types/nannies.types";
import Image from "next/image";
import styles from "./NanniesReview.module.css"

type NanniesReviewsProps = {
  reviews: Review[];
};

export const NanniesReviews = ({ reviews }: NanniesReviewsProps) => {
    return (
        <ul className={styles.list}>
            {reviews.map(({ comment, rating, reviewer }, index) => 
            (
              <li key={index}>   
                <div className={styles.infoContainer}>
                   <div className={styles.profile}>{reviewer.slice(0, 1)}</div>
                  <div> <p>{reviewer}</p> 
                    <div className={styles.rating}>
                      <Image src="/icons/star.svg" alt="star icon" width={16} height={16}/>  {rating}  
                    </div>
                  
                </div>
            </div>   
          <p>{comment}</p>
        </li>
               )               
            )}
</ul>
    )
}