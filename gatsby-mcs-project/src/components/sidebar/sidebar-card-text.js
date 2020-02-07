/** @jsx jsx */
import { jsx } from "theme-ui"
// import {useRef, useEffect} from "react"

// const chunkString = (str, length) => {
//     return str.match(new RegExp('.{1,' + length + '}', 'g'));
// }

// let myWidth = 0;
//     const ref = useRef();
//     useEffect(() => {
//         const width = ref.current ? ref.current.offsetWidth : 0;
//         console.log('Child width', width);
//         myWidth = width;
//     }, [ref.current]);

//     const cardText = props.children;
//     const textLength = cardText.length;
//     console.log('propContent: ', cardText, 'propContent length: ', textLength)

//     let newCardText = cardText;
//     if(textLength > 32){
//         let newText = chunkString(cardText, 32);
//         console.log('New text', newText)
//         newCardText = newText[0];
//     }

const SidebarCardText = props => {
    return (
        <p
            {...props}
            sx={{
                fontSize: 1,
                fontWeight: "body",
                px: 2,
                //margin: "auto",
                //textAlign: "left",
                display: "flex",
                justifyContent: "left",
                lineHeight: 1.2,
                //whiteSpace: "wrap",
                //overflow: "hidden",
                //textOverflow: "ellipsis",
                color: "black",
            }}
        />
    )
}
export default SidebarCardText