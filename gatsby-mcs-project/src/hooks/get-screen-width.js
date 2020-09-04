import { useEffect, useState } from "react"

function getWindowWidth() {
    if(typeof window !== `undefined`){
        const { innerWidth: width, innerHeight: height } = window;
        
        return {
            width,
            height
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
        function handleResize() {
            setWindowDimensions(getWindowWidth());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions.width;
}