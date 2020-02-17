/** @jsx jsx */
import { jsx } from "theme-ui"

const Container = props => {
    return (
        <div
            {...props}
            sx={{
                width: "100%",
                maxWidth: "screenWidth",
                margin: "0 auto",
            }}
        />
    )
}

export default Container