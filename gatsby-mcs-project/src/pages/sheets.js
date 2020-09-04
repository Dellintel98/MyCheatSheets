/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import { graphql } from "gatsby"
import BodySearchBar from "../components/body-content/body-search-bar"
import BodyContentHeader from "../components/body-content/body-content-header"
import sheetIcon from "../images/sheet-icon.png"
import BodyIcon from "../components/body-content/body-icon"
import BodyIconElement from "../components/body-content/body-icon-element"
import BodyCategory from "../components/body-content/body-category"
import BodyCategoryElement from "../components/body-content/body-category-element"


//import Img from "gatsby-image"

const Sheets = (/* data */) => {
  //console.log("Data from page Sheets", data)

  return (
    /*<Layout>
            <h1>Sheets</h1>
            {/*<img src="./grand-piano-wallpaper.jpg" alt="Grand piano"/>
            <Img
                fluid={data.allFile.edges[0].node.childImageSharp.fluid}
                alt="Gatsby Docs are awesome"
            />

            {data.allFile.edges.map(function({node}){
              <Img key={node.id} fluid={node.childImageSharp.fluid} />
            })}

            <h2>Sheet content below image</h2>
        </Layout>*/
    <Layout>
      <Body sx={{ overflow: "scrollbar", }}>
        <BodyContent sx={{
          width: "90%",
          height: "100%",
          alignItems: "top",
          mx: "auto",
        }}>
          <BodyContentHeader>
            <BodyIcon iconSrc={sheetIcon} />
            <h2>Sheets</h2>
            {/* <BodySearchBar /> */}
          </BodyContentHeader>

          <h4 sx={{ width: "50%" }}>C++</h4>
          <BodyCategory>
            <BodyCategoryElement>
              <BodyIconElement iconSrc={sheetIcon} />
            </BodyCategoryElement>
            <BodyCategoryElement>
              <BodyIconElement iconSrc={sheetIcon} />
            </BodyCategoryElement>
            <BodyCategoryElement>
              <BodyIconElement iconSrc={sheetIcon} />
            </BodyCategoryElement>
          </BodyCategory>
        </BodyContent>
      </Body>
    </Layout>
  )
}

export default Sheets

export const query = graphql`
  {
    allFile(filter: {absolutePath: {regex: "//content/images//"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
