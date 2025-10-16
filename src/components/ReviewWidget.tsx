import React from 'react';
import RatingBar from './RatingBar';
import type { RatingData } from './types';
import StarsBar from './StarsBar';

const ReviewWidget: React.FC<{ data: RatingData }> = ({ data }) => {
  // The distribution array is [1-star count, 2-star count, 3-star count, 4-star count, 5-star count]
  // We reverse the order for display (5-star at the top)
  const reversedDistribution = [...data.distribution].reverse(); 

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      borderRadius: '8px', 
      maxWidth: '400px',
      fontFamily: 'Arial, sans-serif'
    }}>

      {/* Stars Bar Display */}
      <div>
        <StarsBar
            key={data.averageRating}
            averageRating={data.averageRating}
        />
      </div>
      
      {/* --- Average Rating Display --- */}
      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        <h2 style={{ margin: 0 }}>Average Rating</h2>
        <p style={{ fontSize: '1em', fontWeight: 'bold', color: '#666' }}>
          {data.averageRating.toFixed(1)} <span style={{ fontSize: '1em', color: '#666' }}>OUT OF 5</span>
        </p>
      </div>

      {/* --- Distribution Bars --- */}
      <div>
        {/* Map through the distribution data to render the bars */}
        {reversedDistribution.map((count, index) => {
          // The reversed array has 5-star at index 0, so we calculate the starCount
          const starCount = 5 - index;
          return (
            <RatingBar
              key={starCount}
              starCount={starCount}
              reviewCount={count}
              totalReviews={data.totalReviews}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReviewWidget;