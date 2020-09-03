/** @jsx jsx */
import { jsx } from "theme-ui"
import SearchBar from "../search-bar"

const BodySearchBar = () => {
    return (
        <div
            sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
            }}
        >
            <SearchBar />
        </div>
    )
}

export default BodySearchBar