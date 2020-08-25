/** @jsx jsx */
import {jsx} from "theme-ui"
import SearchBar from "../search-bar"


const IndexPageSearchBar = () => {

    return(
        <div
            sx={{
                width: "100%",
                height: "20%",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <SearchBar 
                inputWidth="59%"
                fontsize={4}
                height="40%"
                searchIconHeight="70%"
                iconYPadding="8px"
                iconXPadding="10px"
                shadow="4px 4px 4px rgba(0, 0, 0, 0.25)"
            />
        </div>
    )
}

export default IndexPageSearchBar