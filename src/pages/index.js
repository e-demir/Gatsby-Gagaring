import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import './index.css'

const IndexPage = ({ data }) => {
  console.log(data)
  return <div>
    <h1>Hello Universe!</h1>
    <p>PhotoBlog about our earth, our home</p>

    <div className="photos">
      {data.allFile.edges.map(({ node }) => {
        return <Img key={node.id} fluid={node.childImageSharp.fluid} />      
      })}
    </div>
  </div>
}
export const pageQuery = graphql`
query MyQuery {
  allFile(filter: {absolutePath: {regex: "/photos/"}}) {
    edges {
      node {
        id
        childImageSharp{
          fluid{
             ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

export default IndexPage