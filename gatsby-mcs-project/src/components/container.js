/** @jsx jsx */
import { jsx } from "theme-ui"

const Container = ({width="100%", ...props}) => {
    return (
        <div
            {...props}
            sx={{
                width: width,
                maxWidth: "screenWidth",
                margin: "0 auto",
            }}
        />
    )
}

export default Container