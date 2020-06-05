import React, { Component } from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

//filtering for category(customHook)
const getCategories = (items) => {
    //getting only categories from data
    let filteredItems = items.map(items => {
        return items.category
    })
    //making a new set for each category
    let filteredCategories = new Set(filteredItems)
    //coverting set to array
    let categories = Array.from(filteredCategories)
    categories = ["all", ...categories]
    return categories
}

export default class Items extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: props.items.nodes,
            coffeItems: props.items.nodes,
            categories: getCategories(props.items.nodes)
        }
    }
    //onClick function for filtering
    handleCategory = (category) => {
        let filteredItems = [...this.state.items];
        if(category === "all") {
            this.setState(() => {
                return { coffeItems: filteredItems }
            })
        } else {
            let otherItems = filteredItems.filter(item => item.category === category);
            this.setState(() => {
                return { coffeItems: otherItems }
            })
        }
     }
    render() {
        if(this.state.items.length > 0) {
            return (
                <>
                    <div className="types">
                        {this.state.categories.map((category, index) => (
                            <button onClick={() => {this.handleCategory(category)}} key={index}>{category}</button>
                        ))}
                    </div>
                    <div className="product-wrapper">
                        {this.state.coffeItems.map((item, index) => (
                            <div className="product-item" key={`display_item_${index}`}>
                                <div className="img-wrapper">
                                    <Img fixed={item.images.childImageSharp.fixed} />
                                    <p>{item.description}</p>
                                </div>
                                <div className="product-details">
                                        <h3 className="product-title">{item.title}</h3>
                                    <span className="product-price">price: ${item.price}</span>
                                    <Link to={`/products/${item.slug}`}>details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )
        } else {
            return(
                <h1>No such item...</h1>
            )
        }
    }
}