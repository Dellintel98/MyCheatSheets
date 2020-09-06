/** @jsx jsx */
import { jsx } from "theme-ui"

const InfoContainer = ({containerWidth="12%", backgroundColor="transparent", ...props}) => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: backgroundColor,
                width: containerWidth,
                height: "100%",
            }}
        />
    )
}

export default InfoContainer