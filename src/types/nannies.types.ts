export type Review = {
  comment: string;
  rating: number;
  reviewer: string;
};

export type Nannie = {
  name: string;
    avatar_url: string;
    birthday: string;
    experience: string;
    education: string;
    kids_age: string;
    price_per_hour: number;
    location: string;
    about: string;
    characters: string[];
    rating: number;
  id: string;
  reviews: Review[];
};