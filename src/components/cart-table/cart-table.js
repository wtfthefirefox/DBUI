import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCart, incrementCountOfProduct, decrimentCountOfProduct} from '../../actions/';

const CartTable = ({items, deleteFromCart, incrementCountOfProduct, decrimentCountOfProduct}) => {
    return (
        <>
            <div className="cart__title">Your order:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, count} = item;

                        return (
                            <div key={id} className="cart__item">
                                <img className="cart__item-img" src={url} alt={title}/>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div className="cart__item-changers">
                                    <button className="cart__item-minus" onClick={() => decrimentCountOfProduct(id)}>
                                        <svg width="10" height="10">
                                            <rect width="10" height="2" ry="1" fill="#454B54" y="40%"/>
                                        </svg>
                                    </button>
                                    <button className="cart__item-plus" onClick={() => incrementCountOfProduct(id)}>
                                        <svg width="10" height="10">
                                            <g fill="#454B54">
                                                <rect width="2" height="10" ry="1" x="40%"/>
                                                <rect width="10" height="2" ry="1" y="40%"/>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                <div className="cart__item-count">count: {count}</div>
                                <div className="cart__close" onClick={() => deleteFromCart(id)}>&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps = {
    deleteFromCart,
    incrementCountOfProduct,
    decrimentCountOfProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);