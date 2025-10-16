export interface RatingData {
    averageRating: number;
    totalReviews: number;
    distribution: number[];
}

export interface RatingBarProps {
    starCount: number;
    reviewCount: number;
    totalReviews: number;
}

export interface StarsBarProps {
    averageRating: number;
}