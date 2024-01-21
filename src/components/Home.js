import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardData from './CardData';
import { addToCart } from '../redux/features/cartSlice';
import './style.css';
import { useDispatch } from 'react-redux';

const Home = () => {

    const [cartData, setCartData] = useState(CardData);
    const dispatch = useDispatch();

    // add to Cart
    const send = e => {
        console.log("first", e);
    }
    return (
        <>
            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400}}>
                    Restaurants in Ahmedabad Open now
                </h2>

                <div className='row mt-2 d-flex justify-content-around align-items-center'>

                {
                    cartData.map((element, index) => {
                        return(
                            <React.Fragment key={index}>
                                <Card style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                                    <Card.Img variant='top' className='cd' src={element.imgdata}/>

                                    <div className='card_body'>
                                        {/* first row */}
                                        <div className='upper_data d-flex justify-content-between align-items-center'>
                                            <h4 className='mt-2'>
                                                {element.dish}
                                            </h4>
                                            <span>{element.rating}&nbsp;★</span>
                                        </div>

                                        {/* second row */}
                                        <div className='lower_data d-flex justify-content-between'>
                                            <h5>
                                                {element.address}
                                            </h5>
                                            <span>{element.price}</span>
                                        </div>
                                        {/* last row */}
                                        <div className='extra'>

                                        </div>

                                        <div className='last_data d-flex justify-content-between align-items-center'>
                                            <img src={element.arrimg} className='limg' alt='' />
                                            <Button 
                                                style={{ width: "150px", background: "#ff3054", border: "none" }} variant='outline-light'
                                                className='mt-2 mb-2'
                                                onClick={()=>send(element)}
                                            >   
                                                Add to Cart
                                            </Button>
                                            <img src={element.delimg} className='laimg' alt='' />
                                        </div>

                                    </div>
                                </Card>
                            </React.Fragment>
                        )
                    })
                }    
                    
                </div>
            </section>
        </>
    )
}

export default Home
