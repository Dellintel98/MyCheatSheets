/** @jsx jsx */
import { jsx } from "theme-ui"


const CreatorIcon = ({ iconImage, iconName, username, }) => {
    var iconSize = "60px";
    // const iconSize = "162px";

    return (
        <div
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                //backgroundColor: "pink",
                width: "10%",
                height: "100%",
                overflow: "hidden",


            }}
        >
            <img
                src={iconImage}
                alt={iconName}
                sx={{
                    height: iconSize,
                    width: iconSize,
                    //backgroundColor: "blue",
                }}
            />
            <p>
                {username}
            </p>
        </div>
    )
}

export default CreatorIcon