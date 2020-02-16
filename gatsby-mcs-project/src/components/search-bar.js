/** @jsx jsx */
import {jsx} from "theme-ui"
import SearchIcon from "./navigationScripts/search-icon"

const SearchBar = () => {
    return (
        <div
            sx={{
                mx: 2,
                minWidth: "180px",
                height: "25px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                //backgroundColor: "yellow",
                border: "solid",
                borderWidth: "1px",
                borderRadius: "4px",
                borderColor: "primary",
                "&:focus": {
                    backgroundColor: "backgroundGrey",
                },
            }}
        >
            <input
                type="search"
                placeholder="Search..."
                //autoFocus={true}
                sx={{
                    width: "150px",
                    py: 1,
                    paddingLeft: 3,
                    //mx: 2,
                    my: 1,
                    overflow: "hidden",
                    //borderWidth: "1px",
                    borderRadius: "4px",
                    //borderColor: "primary",
                    border: "none",
                    color: "secondary",
                    font: "roboto",
                    fontSize: 1,
                    fontWeight: 300,
                    lineHeight: 1.125,
                    backgroundColor: "background",
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