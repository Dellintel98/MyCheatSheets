/** @jsx jsx */
import {jsx} from "theme-ui"


const QuickAccessIcon = ({iconImage, iconName}) => {

    return(
        <div
            sx={{
                backgroundColor: "black",
                width: "162px",
                height: "162px",
                mx: "17px",
            }}
        >
            <img
                src={iconImage}
                alt={iconName}
                sx={{
                    // height: "90px",
                    // maxHeight: "90px",
                    // width: "auto",
                    // cursor: "pointer",
                    // backgroundColor: "black",
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