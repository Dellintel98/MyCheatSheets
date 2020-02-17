/** @jsx jsx */
import { jsx } from 'theme-ui'

const Select = ({
    variant = 'select',
    ...props
}) =>
    <select
        {...props}
        sx={{
            position: "relative",
            bg: "white",
            textAlignLast: 'center',
            textAlign: 'center',
            msTextAlignLast: 'center',
            mozTextAlignLast: 'center',
            lineHeight: 'inherit',
            fontSize: '2',
            fontWeight: 'subtitle',
            width: '90%',
            borderColor: "black",
            border: 10,
            borderRadius: 4,


        }}
    />
export default Select