const path = require("path")
//create pages dynamically 
exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions 
    const result = await graphql(`
        query GetProduct {
            products: allJsonDataJson {
            nodes {
                slug
            }
          }
        }      
    `)
    result.data.products.nodes.forEach(product => {
        createPage({
            path: `/products/${product.slug}`,
            component: path.resolve(`src/templates/product-template.js`),
            context: {
                slug: product.slug
            }
        })
    })
}

