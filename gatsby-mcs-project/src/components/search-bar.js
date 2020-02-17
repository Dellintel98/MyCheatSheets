/** @jsx jsx */
import {jsx} from "theme-ui"
import SearchIcon from "./navigationScripts/search-icon"

const SearchBar = () => {
    return (
        <div
            sx={{
                overflow: "hidden",
                mx: 2,
                minWidth: "180px",
                height: "23px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "background",
                border: "solid",
                borderWidth: "1px",
                borderRadius: "4px",
                borderColor: "primary",
                '&:focus-within': {
                    backgroundColor: "backgroundGrey",
                }
            }}
        >
            <input
                type="text"
                placeholder="Search..."
                sx={{
                    width: "155px",
                    py: 1,
                    paddingLeft: 3,
                    my: 1,
                    overflow: "hidden",
                    borderRadius: "4px 0 0 4px",
                    border: "none",
                    color: "secondary",
                    font: "roboto",
                    fontSize: 1,
                    fontWeight: 300,
                    lineHeight: 1.125,
                    backgroundColor: "background",
                    //backgroundColor: "green",
                    "&:focus": {
                        outline: "none",
                        backgroundColor: "backgroundGrey",
                    },
                }}
            />
            <SearchIcon iconHeight={"17px"} />
        </div>
    )
}

export default SearchBar