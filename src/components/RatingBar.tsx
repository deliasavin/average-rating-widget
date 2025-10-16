import React from "react";
import type { RatingBarProps } from "./types";

const RatingBar: React.FC<RatingBarProps> = ({ starCount, reviewCount, totalReviews }) => {
    const barWidth = totalReviews > 0 ? (reviewCount / totalReviews) * 100 : 0;

    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
            {/* x-star label */}
            <span style={{ fontWeight: 'bold', width: '20px', textAlign: 'right', marginRight: '10px' }}>
                {starCount}*
            </span>

            {/* The progress bar element */}
            <div style={{ flexGrow: 1, height: '8px', backgroundColor: '#e0e0e0', borderRadius: '1px', overflow: 'hidden' }}>
                <div 
                style={{ 
                    width: `${barWidth}%`, 
                    height: '100%', 
                    backgroundColor: 'gold',
                    transition: 'width 0.5s'
                }}
                />
            </div>

            {/* Review Count */}
            <span style={{ width: '30px', textAlign: 'left', marginLeft: '10px', fontSize: '0.9em' }}>
                {reviewCount}
            </span>
        </div>
    )
};

export default RatingBar;