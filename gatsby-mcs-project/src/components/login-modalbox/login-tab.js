/** @jsx jsx */
import {jsx} from "theme-ui"

const LoginTab = ({isSelected, tabTitle, onclick}) => {
    let transparency;
    let hoverColor;
    if(isSelected){
        transparency = 1;
        hoverColor = 1;
    } else {
        transparency = 0.9;
        hoverColor = 0.85;
    }

    return (
        <div
            onClick={onclick}
            sx={{
                width: "50%",
                height: "100%",
                color: "background",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: `rgba(20, 23, 41, ${transparency})`,
                '&:hover': {
                    backgroundColor: `rgba(20, 23, 41, ${hoverColor})`,
                }
            }}
        >
            <p
                sx={{
                    fontSize: 5,
                    fontWeight: "body",
                    textAlign: "center",
                    verticalAlign: "middle",
                }}
            >
                {tabTitle}
            </p>
        </div>
    )
}

export default LoginTab