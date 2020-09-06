/** @jsx jsx */
import { jsx } from "theme-ui"


const CreatorIcon = ({ iconImage, iconName, username, }) => {
    var iconSize = "30px";
    // const iconSize = "162px";

    return (
        <div
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "left",
                //justifyContent: "center",
                //backgroundColor: "pink",
                width: "100%",
                height: iconSize,
                overflow: "hidden",


            }}
        >
            <img
                src={iconImage}
                alt={iconName}
                sx={{
                    height: "100%",
                    width: "auto",
                }}
            />
            <p>
                {username}
            </p>
        </div>
    )
}

export default CreatorIcon