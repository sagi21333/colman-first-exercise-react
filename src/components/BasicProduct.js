import * as React from 'react';
import './BasicProduct.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDollarSign} from '@fortawesome/free-solid-svg-icons'

const BasicProduct = (props) => {

    return(
        <div className="basic-product">
            <div className="item_details">
                <div className="item_title">{props.title}</div>
                <div className="item_price">
                    <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
                    {props.price}
                </div>
            </div>
            <img src={props.imageUrl} />
        </div>
    );

};

export default BasicProduct;