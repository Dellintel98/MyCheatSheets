/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import { graphql } from "gatsby"
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
      <Body>
        <BodyContent>
          <h1>Sheets</h1>
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
