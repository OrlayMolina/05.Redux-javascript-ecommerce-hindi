import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardData from './CardData';
import './style.css';

const Home = () => {

    const [cartData, setCartData] = useState(CardData);

    return (
        <>
            <setcion className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400}}>
                    Restaurants in Ahmedabad Open now
                </h2>

                <div className='row mt-2 d-flex justify-content-around align-items-center'>

                {
                    cartData.map((element, index) => {
                        return(
                            <>
                                <Card style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                                    <Card.Img variant='top' className='cd' src={element.imgdata}/>

                                    <div className='card_body'>
                                        {/* first row */}
                                        <div className='upper_data d-flex justify-content-between align-items-center'>
                                            <h4 className='mt-2'>
                                                punjabi
                                            </h4>
                                            <span>3.8&nbsp;★</span>
                                        </div>

                                        {/* second row */}
                                        <div className='lower_data d-flex justify-content-between'>
                                            <h5>
                                                North Indian. Biryani, Mughlai
                                            </h5>
                                            <span>300</span>
                                        </div>
                                        {/* last row */}
                                        <div className='extra'>

                                        </div>

                                        <div className='last_data d-flex justify-content-between align-items-center'>
                                            <img src='/logo192.png' className='limg' alt='' />
                                            <Button 
                                                style={{ width: "150px", background: "#ff3054", border: "none" }} variant='outline-light'
                                                className='mt-2 mb-2'
                                            >   
                                                Add to Cart
                                            </Button>
                                            <img src='/logo192.png' className='laimg' alt='' />
                                        </div>

                                    </div>
                                </Card>
                            </>
                        )
                    })
                }    
                    
                </div>
            </setcion>
        </>
    )
}

export default Home
