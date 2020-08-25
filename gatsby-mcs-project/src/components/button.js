/** @jsx jsx */
import { jsx } from 'theme-ui'

const Button = ({
    variant = 'primary',
    ...props
}) =>
    <button
        {...props}
        sx={{
            textAlign: 'center',
            lineHeight: 'inherit',
            textDecoration: 'none',
            fontSize: 'inherit',
            fontWeight: 'bold',
            width: '80%',
            border: 0,
            borderRadius: 4,
            marginBottom: 3,
            boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.25)',
            // pass variant prop to sx
            variant: `buttons.${variant}`,
            font: "roboto",
        }}
    />
export default Button