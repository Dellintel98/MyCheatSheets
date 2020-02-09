/** @jsx jsx */
import { jsx } from "theme-ui"
import {useRef, useEffect} from "react"

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
    let alignText = "left";
    let leftMargin = 4;
    let leftPadding = 3;
    const cardTextLength = props.children.length;

    if(cardTextLength < 20){
        alignText = "center";
        leftMargin = 0;
        leftPadding = 0;
    }

    return (
        <p
            {...props}
            sx={{
                //backgroundColor: "green",
                fontSize: 1,
                fontWeight: "body",
                paddingLeft: leftPadding,
                my: "auto",
                marginLeft: leftMargin,
                width: "100%",
                textAlign: alignText,
                lineHeight: 1.2,
                whiteSpace: "wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "black",
            }}
        />
    )
}
export default SidebarCardText