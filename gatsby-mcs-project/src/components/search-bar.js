/** @jsx jsx */
import { jsx } from "theme-ui"
import SearchIcon from "./navigation-scripts/search-icon"

const SearchBar = ({
    inputWidth="155px",
    fontsize=1,
    height="23px",
    searchIconHeight="17px",
    iconYPadding="3px",
    iconXPadding="4px",
    shadow="0px 0px 0px transparent",
    borderColor="primary",
    borderWidth="1px",
}) => {
    return (
        <div
            sx={{
                position: "relative",
                overflow: "hidden",
                mx: 2,
                minWidth: "180px",
                width: inputWidth,
                height: height,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "background",
                border: "solid",
                borderWidth: borderWidth,
                borderRadius: "4px",
                borderColor: borderColor,
                boxShadow: shadow,
                '&:focus-within': {
                    backgroundColor: "backgroundGrey",
                }
            }}
        >
            <input
                type="text"
                placeholder="Search..."
                sx={{
                    width: "100%",
                    py: 1,
                    paddingLeft: 3,
                    my: 1,
                    overflow: "hidden",
                    borderRadius: "4px 0 0 4px",
                    border: "none",
                    color: "secondary",
                    fontFamily: `body`,
                    fontSize: fontsize,
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
            <SearchIcon iconHeight={searchIconHeight} iconYPadding={iconYPadding} iconXPadding={iconXPadding} />
        </div>
    )
}

export default SearchBar