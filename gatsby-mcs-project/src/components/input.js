/** @jsx jsx */
import { jsx } from 'theme-ui'

const Input = ({
    placeholder,
    inputwidth,
    backgroundcolor,
    fontsize,
    paddingY
}) => {
    return(
        <div
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <input
                type="input"
                placeholder={placeholder}
                sx={{
                    width: inputwidth,
                    py: paddingY,
                    marginBottom: 1,
                    paddingLeft: 3,
                    overflow: "hidden",
                    borderRadius: "4px 4px",
                    border: "1px solid rgba(20, 23, 41, 0.5)",
                    color: "secondary",
                    font: "roboto",
                    fontSize: fontsize,
                    fontWeight: 300,
                    lineHeight: 1.125,
                    backgroundColor: backgroundcolor,
                    "&:focus": {
                        outline: "none",
                        backgroundColor: "alternateGrey",
                        borderColor: "rgba(20, 23, 41, 1)",
                    },
                }}
            />
        </div>
    )
}
export default Input