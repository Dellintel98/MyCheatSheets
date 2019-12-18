/** @jsx jsx */
import {jsx} from "theme-ui"

const Card = () => {
    return(
        <div 
            sx={{
                width: "30px",
                height: "30px",
                backgroundColor: "tomato",
            }}
        />
    )
}

const SideBar = props => {
    return(
        <div
            sx={{
                width: "100px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "yellow",
            }}
        >
            Ovo je side bar
            <Card />
        </div>
    )
}

export default SideBar