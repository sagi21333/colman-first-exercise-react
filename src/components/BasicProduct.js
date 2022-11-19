import * as React from 'react';
import './BasicProduct.css';

const BasicProduct = (props) => {

    return(
        <div className={basic-product}>
            <h2 >{props.title} </h2>
            <div >{props.price} </div>
            <img src={props.imageUrl}  />
        </div>
    );

};

export default BasicProduct;