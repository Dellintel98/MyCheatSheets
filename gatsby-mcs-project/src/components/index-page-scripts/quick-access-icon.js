/** @jsx jsx */
import {jsx} from "theme-ui"


const QuickAccessIcon = ({iconImage, iconName, iconSize="152px"}) => {
    // const iconSize = "152px";
    // const iconSize = "162px";

    return(
        <div
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                width: iconSize,
                height: iconSize,
                mx: "17px",
                overflow: "hidden",
                border: "0px hidden transparent",
                borderRadius: "4px",
                cursor: "pointer",
                boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
                '&:hover': {
                    boxShadow: '4px 4px 7px rgba(0, 0, 0, 0.38)',
                    backgroundColor: "alternateGrey",
                }
            }}
        >
            <img
                src={iconImage}
                alt={iconName}
                sx={{
                    height: "100%",
                    width: "auto",
                    // border: "0px hidden transparent",
                    // borderRadius: "50%",
                    // boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.28)',
                    // '&:hover': {
                    //     boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.38)',
                    //     backgroundColor: "alternateGrey",
                    // }
                }}
            />
        </div>
    )
}

export default QuickAccessIcon