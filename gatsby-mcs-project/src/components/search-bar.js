/** @jsx jsx */
import {jsx} from "theme-ui"

const SearchBar = () => {
    return (
        <input
            type="search"
            placeholder="Search..."
            //autoFocus={true}
            sx={{
                width: "100px",
                py: 2,
                paddingLeft: 4,
                my: 1,
                overflow: "hidden",
                borderWidth: 0,
                color: "text",
                fontSize: 1,
                fontWeight: "body",
                backgroundColor: "primary",
                "&:focus": {
                    outline: "none",
                    backgroundColor: "accent",
                },
            }}
        />
    )
}

export default SearchBar