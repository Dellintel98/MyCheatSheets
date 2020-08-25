/** @jsx jsx */
import {jsx, Styled} from "theme-ui"


const Slogan = ({sloganText}) => {

    return(
        <Styled.h1
            sx={{
                // fontFamily: "roboto",
                // fontStyle: "normal",
                // fontWeight: "heading",
            }}
        >
            {sloganText}
        </Styled.h1>
    )
}

export default Slogan