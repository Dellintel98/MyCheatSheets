/** @jsx jsx */
import { jsx } from "theme-ui"
import Select, { components } from "react-select"
import FilterIcon from "../images/button-icons/filter-line.svg"


const customInnerStyles = {
    option: (provided, state) => ({
        ...provided,
        color: "white",
        background: state.isSelected ? "#5d73b0" : "#333f60",
        '&:hover': {
            background: "#5d73b0",
        },
        '&:focus': {
            background: "#5d73b0",
        }
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: "4px",
        backgroundColor: "#333f60",
        color: "white",
        width: "100%",
        height: "auto",
    }),
    control: (_, {selectProps: { backgroundColor }}) => ({
        border: "1px solid rgba(0, 0, 0, 0.12)",
        display: "flex",
        flexDirection: "row",
        backgroundColor: backgroundColor,
        color: "white",
        borderRadius: "4px",
        height: "100%",
        position: "relative",
    }),
    placeholder: () => ({
        color: "white",
    }),
    input: (provided) => ({
        ...provided,
        color: "white",
    }),
    multiValue: (provided, state) => ({
        ...provided,
        opacity: (state.isDisabled) ? 0.5 : 1,
        transition: "opacity 300ms",
        background: "#f2f2f2",
        color: "#5d73b0",
    }),
    multiValueLabel: (provided, state) => ({
        ...provided,
        background: "#f2f2f2",
        color: "#181c32",
        overflow: "hidden",
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        borderRadius: 0,
        '&:hover': {
            background: "rgba(221, 39, 15, 0.5)",
            color: "#a11d0b",
        }
    })
}

const sheetOptions = [
    {value: 'c', label: 'C'},
    {value: 'c++', label: 'C++'},
    {value: 'c#', label: 'C#'},
    {value: 'js', label: 'Javascript'},
]

const Option = props => {
    return (
        <div>
            {(props.label === "Keyword") ? null : <components.Option {...props} />}
            {(props.label === "Keyword") ? 
                <Select
                    placeholder={props.label}
                    styles={customInnerStyles}
                    backgroundColor="#181c32"
                    isMulti
                    name="select"
                    options={sheetOptions}
                    sx={{
                        width: "100%",
                    }}
                /> 
            : null}
        </div>
    );
}

const ValueContainer = ({children, ...props}) => (
    <components.ValueContainer {...props}>Filter</components.ValueContainer>
);

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <img
                src={FilterIcon}
                alt="Filter icon"
                sx={{
                    maxWidth: "20px",
                    minHeight: "20px",
                    maxHeight: "20px",
                }}
            />
        </components.DropdownIndicator>
    );
}

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
        width: "200%",
        height: "auto",
    }),
    control: (_, {selectProps: { backgroundColor }}) => ({
        border: "1px solid rgba(0, 0, 0, 0.12)",
        display: "flex",
        flexDirection: "row",
        backgroundColor: backgroundColor,
        color: "white",
        borderRadius: "4px",
        height: "100%",
        position: "relative",
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

const FilterBox = ({filterOptions}) => {
    return (
        <div
            sx={{
                height: "100%",
                width: "14%",
                // backgroundColor: "khaki",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Select
                placeholder="Filter"
                styles={customStyles}
                backgroundColor="#181c32"
                components={{ValueContainer, DropdownIndicator, Option}}
                isDisabled={false}
                isClearable={true}
                isSearchable={false}
                closeMenuOnSelect={false}
                name="sort-by"
                options={filterOptions}
                sx={{
                    width: "100%",
                }}
            />
        </div>
    )
}

export default FilterBox