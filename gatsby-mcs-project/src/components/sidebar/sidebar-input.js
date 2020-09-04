/** @jsx jsx */
import { jsx } from 'theme-ui'

const SideBarInput = ({
    variant = 'input',
    placeholder,
    ...props
}) =>
    <input
        type="text"
        placeholder={placeholder}
        sx={{
            bg: "white",
            textcolor: "primary",
            textAlign: 'center',
            lineHeight: 'inherit',
            textDecoration: 'none',
            font: "roboto",
            fontSize: '1',
            fontWeight: 'subtitle',
            width: '90%',
            borderColor: "black",
            border: 10,
            borderRadius: 4,
        }}
    />
export default SideBarInput