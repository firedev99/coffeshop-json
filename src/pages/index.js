import React from "react"
import '../style.css'
import {graphql} from 'gatsby'
import Items from '../components/items'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
 <>
  <Layout>
    <SEO title="Home" />
    <Items items={data.products} />
  </Layout>
  </>
)
export const query = graphql`
  {
    products: allJsonDataJson {
      nodes {
        title
        slug
        price
        description
        category
        images {
          childImageSharp {
            fixed(height: 150, width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`


export default IndexPage
