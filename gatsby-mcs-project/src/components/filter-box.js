/** @jsx jsx */
import { jsx, ColorMode } from "theme-ui"
// import { Component } from "react"
import Select from "react-select"

const FilterBox = ({filterOptions}) => {
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
                defaultValue={filterOptions[0]}
                isDisabled={false}
                isClearable={false}
                isSearchable={false}
                name="sort-by"
                options={filterOptions}
                sx={{
                    width: "100%",
                    color: "primary",
                }}
            />
        </div>
    )
}

export default FilterBox


// select {
//     width: 100%;
//     padding: 16px 20px;
//     border: none;
//     border-radius: 4px;
//     background-color: #f1f1f1;
//   }