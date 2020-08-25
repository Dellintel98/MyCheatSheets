/** @jsx jsx */
import {jsx, Styled} from "theme-ui"


const Slogan = ({sloganText}) => {

    return(
        <Styled.h1
            sx={{
                color: "slogan",
            }}
        >
            {sloganText}
        </Styled.h1>
    )
}

export default Slogan