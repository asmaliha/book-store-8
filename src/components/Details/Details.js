import React from 'react';
import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Details = (props) => {
    console.log(props.writers);
    const { name, author, cover, pages, price } = (props.writers);
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (

        <div className="container" >
            <div >
                <div className="mb-5 shadow-lg py-5 px-4  text-center">
                    <img src={cover} className="image" alt="..."></img>

                    <div className="details">
                        <h5 className="card-title">Book Name:{name} </h5>
                        <h5 className="card-title">Author:{author} </h5>
                        <h5 className="card-title">Total Pages:{pages} </h5>
                        <h5 className="card-title">Book Price:{price} </h5>
                    </div>
                    <button type="button" class="btn btn-danger">{element} Add to cart</button>
                </div>

            </div>


        </div>


    );
};

export default Details;