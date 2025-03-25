import { Nanny, Review } from "@/types/nannies.types";
import Image from "next/image";
import styles from "./NanniesReview.module.css"
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { MakeAnAppointment } from "../MakeAnAppointment/MakeAnAppointment";

type NanniesReviewsProps = {
  reviews: Review[];
  nanny: Nanny;
};

export const NanniesReviews = ({ reviews, nanny }: NanniesReviewsProps) => {
 const [isModalOpen, setIsModalOpen] = useState(false)
 
  const toggleModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }
  
  return (
    <>
      <div>
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
      <button onClick={toggleModalOpen} className={styles.button} type="button">Make an appointment</button>
      </div>
      {isModalOpen && <Modal isModalOpen={ isModalOpen} toggleModalOpen={toggleModalOpen} stayOnPage={true}>
        <MakeAnAppointment nanny={nanny} toggleModalOpen={ toggleModalOpen } />
      </Modal>}
     
      </>
    )
}