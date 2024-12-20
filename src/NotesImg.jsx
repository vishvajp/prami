import React, { useState } from 'react';
import ImageMarker from 'react-image-marker';
import "./NotesImg.css";

const NotesImg = (props) => {
    const [markers, setMarkers] = useState([
        {
            top: "0%",
            left: "0%",
            boneam: 0, // Initial marker value
        },
    ]);

    const handleAddMarker = (marker) => {
        let newBoneam = markers.length; // Default boneam value based on the length of markers

        const topValue = parseFloat(marker.top);
console.log(topValue)

        if (topValue > 31 && topValue <= 58) {
            newBoneam = markers.filter(m => parseFloat(m.top) > 31 && parseFloat(m.top) <= 58).length + 1;
        }

        const newMarker = { ...marker, boneam: newBoneam };
        setMarkers([...markers, newMarker]);
    };

    const CustomMarker = (marker, index) => {
        const topValue = marker?.top || "0%";
        const boneamValue = marker.boneam;

        return (
            <div 
                className="custom-marker-container" 
                style={{ 
                    top: marker.top, 
                    left: marker.left 
                }}
            >
                {/* Line always starts from the left and goes right */}
                <div className="horizontal-line"></div>
                {parseFloat(topValue) <= 31 && (
                    <div className="custom-marker">Cervical spine - {boneamValue}</div>
                )}
                {parseFloat(topValue) > 31 && parseFloat(topValue) <= 58 && (
                    <div className="custom-marker">Thoracic spine - {boneamValue}</div>
                )}
            </div>
        );
    };

    return (
        <div>
            <ImageMarker
                src="/loginimages/bone.jpeg"
                markers={markers}
                onAddMarker={handleAddMarker}
                markerComponent={(marker, index) => CustomMarker(marker, index)} 
            />
        </div>
    );
}

export default NotesImg;
