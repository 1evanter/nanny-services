import { Review } from "@/types/nannies.types";

type NanniesReviewsProps = {
  reviews: Review[];
};

export const NanniesReviews = ({ reviews }: NanniesReviewsProps) => {
    return (
        <ul>
            {reviews.map(({ comment, rating, reviewer }, index) => 
            (
              <li key={index}>   
            <div>
              {reviewer}            
                {rating}
            </div>   
          <p>{comment}</p>
        </li>
               )               
            )}
</ul>
    )
}