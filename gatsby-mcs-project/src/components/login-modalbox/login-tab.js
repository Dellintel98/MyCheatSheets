/** @jsx jsx */
import {jsx} from "theme-ui"

const LoginTab = ({isSelected, tabTitle}) => {
    let transparency;
    if(isSelected){
        transparency = 1;
    } else {
        transparency = 0.9;
    }

    return (
        <div
            sx={{
                width: "50%",
                height: "100%",
                color: "background",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: `rgba(20, 23, 41, ${transparency})`,
                '&:hover': {
                    backgroundColor: `rgba(20, 23, 41, 0.8)`,
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