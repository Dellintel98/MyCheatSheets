import { useEffect, useState } from "react"

function getWindowWidth() {
    if(typeof window !== `undefined`){
        const { innerWidth, innerHeight } = window;
        
        return {
            innerWidth,
            innerHeight
        };
    } else {
        const width = 1920;
        const height = 1080;

        return{
            width,
            height
        };
    }
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowWidth()
    );

    useEffect(() => {
        if(typeof window !== `undefined`){
            function handleResize() {
                setWindowDimensions(getWindowWidth());
            }

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return windowDimensions.width;
}