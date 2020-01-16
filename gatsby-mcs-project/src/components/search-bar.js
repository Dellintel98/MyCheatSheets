/** @jsx jsx */
import {jsx} from "theme-ui"

const SearchBar = () => {
    return (
        <input
            type="search"
            placeholder="Search..."
            //autoFocus={true}
            sx={{
                width: "180px",
                py: 1,
                paddingLeft: 3,
                mx: 2,
                my: 1,
                overflow: "hidden",
                borderWidth: "1px",
                borderRadius: "4px",
                borderColor: "primary",
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
    )
}

export default SearchBar