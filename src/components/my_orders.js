
import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/main_styles.css'
import '../styles/my_orders.css'
import Navbar from '../layout/navbar'
import Footer from '../layout/footer'
import Car from '../images/Dodge-Ram-2015.jpg'

export default function MyOrders() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-4 ">
                    <div className="col">
                        <h2>My orders</h2>
                    </div>
                </div>
                <div className="table-responsive-sm">
                    <table class="table table-sm table-bordered text-center">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Car</th>
                            <th scope="col">Car Image</th>
                            <th scope="col">Color</th>
                            <th scope="col">Model</th>
                            <th scope="col">Payment method</th>
                            <th scope="col">Rent from</th>
                            <th scope="col">to</th>
                            <th scope="col">price</th>
                            <th scope="col">ends in</th>
                            <th scope="col">Order number</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <th scope="row">
                                    1
                                    <div>
                                        <Link className="view-details-btn" to="#">
                                            view details
                                        </Link>
                                    </div>
                                </th>
                                <td>Dodge ram</td>
                                <td>
                                    <img 
                                    className="car-order-img"
                                    style={{width:'200px'}}
                                    src={Car} 
                                    alt="Card cap"    
                                    /> 
                                </td>
                                <td >Black</td>
                                <td>2015</td>
                                <td>Paypal</td>
                                <td>20/09/2020</td>
                                <td>20/31/2020</td>
                                <td>300$</td>
                                <td>3 days</td>
                                <td>000001</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    2
                                    <div>
                                        <Link className="view-details-btn" to="#">
                                            view details
                                        </Link>
                                    </div>
                                </th>
                                <td>Dodge ram</td>
                                <td>
                                    <img 
                                    className="car-order-img"
                                    style={{width:'200px'}}
                                    src={Car} 
                                    alt="Card cap"    
                                    /> 
                                </td>
                                <td >Black</td>
                                <td>2015</td>
                                <td>PayPal</td>
                                <td>20/09/2020</td>
                                <td>20/31/2020</td>
                                <td>300$</td>
                                <td>3 days</td>
                                <td>000001</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    3
                                    <div>
                                        <Link className="view-details-btn" to="#">
                                            view details
                                        </Link>
                                    </div>
                                </th>
                                <td>Dodge ram</td>
                                <td>
                                    <img 
                                    className="car-order-img"
                                    style={{width:'200px'}}
                                    src={Car} 
                                    alt="Card cap"    
                                    /> 
                                </td>
                                <td >Black</td>
                                <td>2015</td>
                                <td>PayPal</td>
                                <td>20/09/2020</td>
                                <td>20/31/2020</td>
                                <td>300$</td>
                                <td>3 days</td>
                                <td>000001</td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
            <Footer />
        </>
    )
}