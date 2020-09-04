/** @jsx jsx */
import { jsx } from 'theme-ui'
import Input from "../input"

const SignupUsernameInput = ({
    placeholder,
    inputwidth,
    backgroundcolor,
    fontsize
}) => {
    return(
        <div
            sx={{
                height: "18%",
                maxHeight: "25%",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
            }}
        >
            <Input placeholder={placeholder} inputwidth={inputwidth} backgroundcolor={backgroundcolor} fontsize={fontsize} paddingY="2" />
        </div>
    )
}
export default SignupUsernameInput