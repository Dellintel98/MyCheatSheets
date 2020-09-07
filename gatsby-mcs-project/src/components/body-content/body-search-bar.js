/** @jsx jsx */
import { jsx } from "theme-ui"
import SearchBar from "../search-bar"
import SearchSortingBox from "../search-sorting-box"
import FilterBox from "../filter-box"

const BodySearchBar = ({currentPage, sortingOptions, filterOptions}) => {
    const isForumCurrentPage = (currentPage === "forum") ? true : false;

    return (
        <div
            sx={{
                height: "100%",
                width: "70%",
                backgroundColor: "black",
                // backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <SearchBar 
                inputWidth="70%"
                fontsize={3}
                height="40%"
                searchIconHeight="70%"
                iconYPadding="6px"
                iconXPadding="7px"
                // shadow="4px 4px 10px rgba(0, 0, 0, 0.25)"
                borderColor="rgba(0, 0, 0, 0.12)"
                borderWidth="1px"
            />
            <SearchSortingBox sortingOptions={sortingOptions} />
            {isForumCurrentPage && <FilterBox filterOptions={filterOptions} />}
        </div>
    )
}

export default BodySearchBar