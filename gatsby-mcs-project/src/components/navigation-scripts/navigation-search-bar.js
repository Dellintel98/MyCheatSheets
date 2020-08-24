/** @jsx jsx */
import {jsx} from "theme-ui"
import SearchBar from "../search-bar"

const NavigationSearchBar = ({windowWidth}) => {
    const isWindowWideEnough = (windowWidth > 425) ? true : false;

    return (
        <div
            sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
            }}
        >
            {isWindowWideEnough && <SearchBar />}
            {/* Na kraju izrade dodati ovdje modal search bar koji se pojavljuje na pritisak povecala, ako se odlucim na to */}
        </div>
    )
}

export default NavigationSearchBar