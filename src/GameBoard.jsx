import React, { useEffect, useState } from "react";
import Congratus from "./Congratus";

const placeHolderImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIQcEPo9KzbjcqjYCclgXx-vzXh07gTr3vA&s"
const GameBoard = ({ images }) => {
    const [flipedIndex, setFlipedIndex] = useState(null);
    const [foundImages, setFoundImages] = useState({});
    const [showOnce, setShowOnce] = useState(true);


    useEffect(() => {
        if (flipedIndex === null) {
            setTimeout(() => {
                setShowOnce(false);
                console.log("object")
            }, 3000);
        }
    }, []);

    const handleClick = (index) => {
        if (images[flipedIndex]?.type === images[index]?.type) {
            // console.log(images[flipedIndex].type)
            // console.log(images[index])
            setFoundImages({ ...foundImages, [index]: true, [flipedIndex]: true });
        }
        setFlipedIndex(index);
    }

    const isImageVisible = (index) => {
        if (foundImages[index] === true) {
            return true;
        }
        if (index === flipedIndex) {
            return true;
        }
        return false;
    };

    const percentage = Object.entries(foundImages).length / images.length * 100
    //   console.log(percentage)

    return (
        <div>
            {/* progress bar */}
            <div style={{
                width: "627px", height: "15px", margin: "auto", marginBlock: '20px',
                backgroundColor: 'wheat', borderRadius: "10px", overflow: "hidden"
            }}>
                <div style={{
                    height: "100%", width: `${percentage}%`, backgroundColor: "green",
                    display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                    <span style={{ color: "black", marginLeft: "3 0px" }}>{Math.ceil(percentage)}%</span>
                </div>
            </div>
            {/* Congratus */}
            {percentage === 100 && <Congratus />}
            <div
                style={{
                    width: "627px",
                    margin: "auto",
                    display: "grid",
                    gap: "10px",
                    gridTemplateColumns: "repeat(3, 1fr)",
                }}
            >
                {images.map((img, i) => (
                    <>
                        {showOnce ?
                            <Card key={i} image={img.url} />
                            :
                            <div
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    handleClick(i)
                                }}
                            > <Card key={i} image={isImageVisible(i) ? img.url : placeHolderImg}

                                /></div>
                        }
                    </>
                ))}
            </div>
        </div>
    );
};

export default GameBoard;

export const Card = ({ image }) => (
    <div>
        <img
            src={image}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
    </div>
);
