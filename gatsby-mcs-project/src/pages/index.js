import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => ( 
    <Layout>
        <SEO title = "Home" />
        <h1>First change</h1>  
        <p>Welcome to 'My Cheat Sheets'.</p>  
        <p> Keep calm and read Cheat sheets.</p>  
        
        <div style = {{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>  
        
        <Link to = "/page-2/" > Go to page 2 </Link>  
    </Layout>
)

export default IndexPage