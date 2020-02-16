/** @jsx jsx */
import {jsx} from "theme-ui"
import SearchBar from "../search-bar"

const NavigationSearchBar = () => {
    return (
        <div
            sx={{
                height: "navLinksHeight",
                //backgroundColor: "black",
                display: "flex",
                alignItems: "center",
            }}
        >
            <SearchBar />
        </div>
    )
}

export default NavigationSearchBar