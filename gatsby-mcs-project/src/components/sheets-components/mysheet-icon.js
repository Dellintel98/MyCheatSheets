/** @jsx jsx */
import { jsx } from "theme-ui"
import CheckedIcon from "../../images/checked_icon.svg"

const MySheetIcon = ({ iconImage, iconName, number }) => {
    var iconSize = "60px";
    return (
        <div
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "alternateGrey",
                width: "100px",
                height: "120px",
                overflow: "hidden",
                boxShadow: "5px 5px 10px rgba(0,0,0,0.6)",
                borderRadius: "5px",
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
            <div
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "left",
                    justifyContent: "center",
                    //backgroundColor: "yellow",
                }}
            >
                <img
                    src={CheckedIcon}
                    sx={{
                        height: "20px",
                        width: "20px",
                    }}
                />
                <p>
                    {number}
                </p>
            </div>
        </div>
    )
}

export default MySheetIcon