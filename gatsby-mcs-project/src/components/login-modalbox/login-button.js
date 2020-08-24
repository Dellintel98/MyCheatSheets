/** @jsx jsx */
import {jsx} from "theme-ui"

const LoginButton = ({buttonImage, buttonName, onclick}) => {
    return (
        <div
            onClick={onclick}
            sx={{
                width: "20%",
                height: "50%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                backgroundColor: "transparent",
            }}
        >
            <img
                src={buttonImage}
                alt={buttonName}
                sx={{
                    height: "90px",
                    maxHeight: "90px",
                    width: "auto",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    border: "0px hidden transparent",
                    borderRadius: "50%",
                    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.28)',
                    '&:hover': {
                        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.38)',
                        backgroundColor: "alternateGrey",
                    }
                }}
            />
        </div>
    )
}

export default LoginButton