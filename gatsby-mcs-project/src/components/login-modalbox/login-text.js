/** @jsx jsx */
import {jsx, Styled} from "theme-ui"

const LoginText = ({text}) => {
    return (
        <div
            sx={{
                width: "100%",
                height: "20%",
                color: "primary",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "background",
                // backgroundColor: "grey",
            }}
        >
            <h2
                sx={{
                    width: "85%",
                    fontSize: 5,
                    fontWeight: "body",
                    textAlign: "center",
                    textJustify: "inter-word",
                    backgroundColor: "inherit",
                    borderBottom: "1px solid black",
                    lineHeight: "0.1em",
                    margin: "10px 0 20px",
                }}
            >
                <span
                    sx={{
                        backgroundColor: "inherit",
                        padding: "0 15px",
                    }}
                >
                    {text}
                </span>
            </h2>
        </div>
        // <div
        //     sx={{
        //         width: "20%",
        //         height: "20%",
        //         color: "background",
        //         display: "flex",
        //         alignItems: "center",
        //         justifyContent: "center",
        //         backgroundColor: `rgba(20, 23, 41, 1)`,
        //         '&:hover': {
        //             backgroundColor: `rgba(20, 23, 41, 0.8)`,
        //         }
        //     }}
        // >
            
        // </div>
    )
}

export default LoginText