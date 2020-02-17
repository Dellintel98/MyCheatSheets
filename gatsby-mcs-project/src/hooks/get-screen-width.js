import { useEffect, useState } from "react"

function getWindowWidth() {
    const { innerWidth: width, innerHeight: height } = window;

    return {
        width,
        height
    };
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