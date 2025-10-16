import React from "react";
import type { StarsBarProps } from "./types";
import fiveStars from "../assets/five_stars.png";

const StarsBar: React.FC<StarsBarProps> = ({ averageRating }) => {
    const barWidth = averageRating * 20;

    const clipStyle: React.CSSProperties = {
        // Clip the left side to (barWidth)%, leaving the right side visible.
        clipPath: `inset(0% ${100 - barWidth}% 0% 0%)`,
        transition: 'clip-path 0.5s ease-in-out',
      };

    return (
        <div style={{ width: '100%', height: '15vw', position: 'relative', margin: '5px 0', maskImage: `url(${fiveStars})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}>
            {/* The progress bar element */}
            <img src={fiveStars} style={{width: '100%', height: '15vw', objectFit: 'contain'}} />
            {
                <div 
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: 'gold',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    ...clipStyle
                }}
                />
            }
        </div>
    )
};

export default StarsBar;