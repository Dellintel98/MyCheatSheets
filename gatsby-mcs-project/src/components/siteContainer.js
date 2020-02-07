/** @jsx jsx */
import { jsx } from "theme-ui"
import Container from "./container"

const SiteContainer = props => {
    return (
        <Container
            {...props}
            sx={{
                maxWidth: "siteContainer",
            }}
        />
    )
}

export default SiteContainer