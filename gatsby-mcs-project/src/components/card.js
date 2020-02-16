/** @jsx jsx */
import { jsx } from "theme-ui"


const Card = props => {
    return (
        <div
            {...props}
            sx={{
                //backgroundColor: "orange",
                marginLeft: 0,
                paddingLeft: 3,
                paddingRight: 4,
                width: "90%",
                height: "33%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "left",
                userSelect: "none", /* supported by Chrome and Opera */
                webkitUserSelect: "none", /* Safari */
                khtmlUserSelect: "none", /* Konqueror HTML */
                mozUserSelect: "none", /* Firefox */
                msUserSelect: "none", /* Internet Explorer/Edge */
            }}
        />
    )
}
export default Card