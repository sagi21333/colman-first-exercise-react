import * as React from 'react';
import './BasicProduct.css';

const BasicProduct = (props) => {

    return(
        <div className="basic-product">
            <h2 className="basic-product__title">{props.title} </h2>
            <div className="basic-product__price">{props.price} </div>
            <img src={props.imageUrl}  />
        </div>
    );

};

export default BasicProduct;