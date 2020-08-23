/** @jsx jsx */
import {jsx} from "theme-ui"

const CloseButton = ({
    buttonImage,
    buttonPosition,
    buttonHeight,
    buttonWidth,
    divHeight,
    divWidth,
    divTop,
    divRight,
    buttonMargin,
    alignButton,
    justifyButton,
    onclick,
}) => {
    return (
        <div
            onClick={onclick}
            sx={{
                position: buttonPosition,
                width: divWidth,
                height: divHeight,
                display: "flex",
                alignItems: alignButton,
                justifyContent: justifyButton,
                backgroundColor: "transparent",
                alignSelf: "flex-start",
                right: divRight,
                top: divTop,
                zIndex: 3,
                cursor: "pointer",
            }}
        >
            <img
                src={buttonImage}
                alt="Close button"
                sx={{
                    height: buttonHeight,
                    maxHeight: "90px",
                    width: buttonWidth,
                    backgroundColor: "transparent",
                    borderRadius: "50%",
                    border: "0px hidden transparent",
                    boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.4)',
                    opacity: "0.7",
                    margin: buttonMargin,
                    '&:hover': {
                        boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.6)',
                        opacity: "0.8",
                    }
                }}
            />
        </div>
    )
}

export default CloseButton