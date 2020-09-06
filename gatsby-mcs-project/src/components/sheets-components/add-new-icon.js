/** @jsx jsx */
import { jsx } from "theme-ui"
import PlusIcon from "../../images/plus-icon.svg"

const AddNewIcon = ({ }) => {
    var iconSize = "30px";
    return (
        <div
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "alternateGrey",
                width: "100px",
                height: "120px",
                overflow: "hidden",
                boxShadow: "5px 5px 10px rgba(0,0,0,0.6)",
                borderRadius: "5px",
                border: "1px dashed black",
            }}
        >

            <img
                src={PlusIcon}
                alt={"addNew"}
                sx={{
                    height: iconSize,
                    width: iconSize,
                }}
            />
        </div>
    )
}

export default AddNewIcon