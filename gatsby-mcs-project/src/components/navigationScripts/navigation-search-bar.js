/** @jsx jsx */
import {jsx} from "theme-ui"
import SearchBar from "../../components/search-bar"

const NavigationSearchBar = () => {
    return (
        <div
            sx={{
                height: "navLinksHeight",
                display: "flex",
                alignItems: "center",
            }}
        >
            <SearchBar />
        </div>
    )
}

export default NavigationSearchBar