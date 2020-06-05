import React from 'react'
import Img from 'gatsby-image'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
const ProductTemplate = ({data}) => {
    let products = data.products
    return (
        <Layout>
          <div className="single-product-wrapper">
            <h1>{products.title}</h1>
            <div className="single-img">
              <Img fixed={products.images.childImageSharp.fixed} />
            </div>
            <p>{products.description}</p>
            <div className="single-details">
              <h5>price: ${products.price}</h5>
            </div>
            <div className="back">
            <Link to="/">Back to Home page</Link>
            </div>
          </div>
          
        </Layout>
    )
}

export const query = graphql`
query GetSingleProduct($slug: String) {
    products: jsonDataJson(slug: {eq: $slug}) {
      title
      price
      description
      images {
        childImageSharp {
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

export default ProductTemplate
