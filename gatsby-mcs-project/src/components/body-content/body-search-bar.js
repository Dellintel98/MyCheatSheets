/** @jsx jsx */
import { jsx } from "theme-ui"
import SearchBar from "../search-bar"
import SearchSortingBox from "../search-sorting-box"

const BodySearchBar = ({sortingOptions}) => {
    return (
        <div
            sx={{
                height: "80%",
                width: "60%",
                backgroundColor: "black",
                // backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <SearchBar 
                inputWidth="80%"
                fontsize={3}
                height="40%"
                searchIconHeight="70%"
                iconYPadding="8px"
                iconXPadding="10px"
                // shadow="4px 4px 10px rgba(0, 0, 0, 0.25)"
                borderColor="rgba(0, 0, 0, 0.12)"
                borderWidth="2px"
            />
            <SearchSortingBox sortingOptions={sortingOptions} />
        </div>
    )
}

export default BodySearchBar