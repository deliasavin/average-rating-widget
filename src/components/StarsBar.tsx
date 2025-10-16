import React from "react";
import type { StarsBarProps } from "./types";

const StarsBar: React.FC<StarsBarProps> = ({ averageRating }) => {
    const barWidth = averageRating * 20 ?? 0;

    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
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

        </div>
    )
};

export default StarsBar;