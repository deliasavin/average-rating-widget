import ReviewWidget from './components/ReviewWidget';
import type { RatingData } from './components/types';

function App() {
  // Sample data received from the backend/API
  const sampleRatingData: RatingData = {
    averageRating: 4.6,
    totalReviews: 1232,
    // [1-star count, 2-star count, 3-star count, 4-star count, 5-star count]
    distribution: [40, 14, 55, 171, 952], 
  };

  return (
    <div style={{ padding: '10px' }}>
      <ReviewWidget data={sampleRatingData} />
    </div>
  );
}

export default App;