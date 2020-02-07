/** @jsx jsx */
import { jsx } from "theme-ui"

const SidebarCard = props => {
    return (
        <div
            {...props}
            sx={{
                mx: 3,
                marginTop: 1,
                width: "92%",
                height: "30%",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "left",
            }}
        />
    )
}
export default SidebarCard