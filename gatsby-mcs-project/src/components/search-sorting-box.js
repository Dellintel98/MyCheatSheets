/** @jsx jsx */
import { jsx } from "theme-ui"
import Select, { components } from "react-select"


const ValueContainer = ({children, ...props}) => (
    <components.ValueContainer {...props}>Sort by</components.ValueContainer>
);

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: "#ffffff",
        backgroundColor: state.isSelected ? "#5d73b0" : "transparent",
        '&:hover': {
            background: "#333f60",
        },
        '&:focus': {
            background: "#5d73b0",
        }
    }),
    menu: (provided, state) => ({
        ...provided,
        borderRadius: "4px",
        backgroundColor: state.selectProps.backgroundColor,
        color: "white",
    }),
    control: (_, {selectProps: { backgroundColor }}) => ({
        border: "1px solid rgba(0, 0, 0, 0.12)",
        display: "flex",
        flexDirection: "row",
        backgroundColor: backgroundColor,
        color: "white",
        borderRadius: "4px",
        height: "100%"
    }),
    placeholder: () => ({
        color: "white",
    }),
    ValueContainer: (provided) => ({
        ...provided,
        color: "white",
        background: "green",
        width: "100%",
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...provided, opacity, transition, color: "white" };
    }
}

const SearchSortingBox = ({sortingOptions}) => {
    return (
        <div
            sx={{
                height: "100%",
                width: "16%",
                // backgroundColor: "seagreen",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 2,
            }}
        >
            <Select
                placeholder="Sort by"
                styles={customStyles}
                backgroundColor="#181c32"
                components={{ValueContainer}}
                className="basic-single"
                classNamePrefix="select"
                isDisabled={false}
                isClearable={false}
                isSearchable={false}
                name="sort-by"
                options={sortingOptions}
                sx={{
                    width: "100%",
                }}
            />
        </div>
    )
}

export default SearchSortingBox