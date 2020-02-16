/** @jsx jsx */
import { jsx } from 'theme-ui'

const Label = ({
    variant = 'label',
    ...props
}) =>
    <input
        type="text"
        sx={{
            bg: "white",
            textAlign: 'center',
            lineHeight: 'inherit',
            textDecoration: 'none',
            fontSize: '1',
            fontWeight: 'subtitle',
            width: '90%',
            borderColor: "black",
            border: 10,
            borderRadius: 4,

        }}
    />
export default Label