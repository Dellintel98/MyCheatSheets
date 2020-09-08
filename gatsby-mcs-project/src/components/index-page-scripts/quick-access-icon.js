/** @jsx jsx */
import {jsx} from "theme-ui"


const QuickAccessIcon = ({iconImage, iconSize=["180px", null, "150px", null, null, null, null, null, null, "130px", "152px"]}) => {

    return(
        <div
            sx={{
                backgroundColor: "white",
                width: iconSize,
                minWidth: iconSize,
                maxWidth: iconSize,
                height: iconSize,
                minHeight: iconSize,
                maxHeight: iconSize,
                mx: ["0px", "17px"],
                marginBottom: ["2rem", null, null, null, null, "0.5rem"],
                overflow: "hidden",
                border: "0px hidden transparent",
                borderRadius: "4px",
                cursor: "pointer",
                boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
                '&:hover': {
                    boxShadow: '4px 4px 7px rgba(0, 0, 0, 0.38)',
                    backgroundColor: "alternateGrey",
                },
                backgroundSize: "cover",
                backgroundImage: `url(${iconImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0px 0px",
            }}
        />
    )
}

export default QuickAccessIcon