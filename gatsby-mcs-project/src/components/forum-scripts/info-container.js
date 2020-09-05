/** @jsx jsx */
import { jsx } from "theme-ui"

const InfoContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: "oldlace",
                width: "15%",
                height: "100%",
            }}
        />
    )
}

export default InfoContainer