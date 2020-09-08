/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import CheckedIcon from "../../images/checked_icon.svg"

const MySheetIcon = ({ iconImage, iconName, number, iconSize="70px" }) => {
    return (
        <div
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "alternateGrey",
                width: "100px",
                height: "120px",
                boxShadow: "4px 5px 10px rgba(0,0,0,0.25)",
                borderRadius: "4px",
                cursor: "pointer",
                '&:hover': {
                    backgroundColor: "backgroundGrey",
                    boxShadow: "4px 5px 10px rgba(0,0,0,0.35)",
                }
            }}
        >
            <img
                src={iconImage}
                alt={iconName}
                sx={{
                    height: iconSize,
                    width: iconSize,
                    // backgroundColor: "blue",
                }}
            />
            <div
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "left",
                    // backgroundColor: "yellow",
                    width: "auto",
                    position: "absolute",
                    bottom: 0.5,
                    left: 1,
                }}
            >
                <img
                    src={CheckedIcon}
                    sx={{
                        height: "20px",
                        width: "20px",
                    }}
                />
                <Styled.p>
                    {number}
                </Styled.p>
            </div>
        </div>
    )
}

export default MySheetIcon