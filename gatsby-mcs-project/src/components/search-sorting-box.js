/** @jsx jsx */
import { jsx, ColorMode } from "theme-ui"
// import { Component } from "react"
import Select from "react-select"

const SearchSortingBox = ({sortingOptions}) => {
    return (
        <div
            sx={{
                height: "100%",
                width: "20%",
                // backgroundColor: "seagreen",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={sortingOptions[0]}
                isDisabled={false}
                isClearable={false}
                isSearchable={false}
                name="sort-by"
                options={sortingOptions}
                sx={{
                    width: "100%",
                    color: "primary",
                }}
            />
        </div>
    )
}

export default SearchSortingBox


// select {
//     width: 100%;
//     padding: 16px 20px;
//     border: none;
//     border-radius: 4px;
//     background-color: #f1f1f1;
//   }