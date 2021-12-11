import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restaurant from './Restaurant'
import { listRestaurants } from '../actions/restaurantAction'
import {useDispatch,useSelector} from 'react-redux'
function Home() {
    const dispatch=useDispatch();
    const restaurantReducer=useSelector(state=>state.restaurantReducer)
    const {restaurants}=restaurantReducer

    useEffect(() => {
        dispatch(listRestaurants())
    },[dispatch])
    return (
        <>
            {restaurants ?(
                <Row>
                    {restaurants.map(item =>(
                        <Col sm={12} mg={8} lg={6} xl={3}>
                            <Restaurant item={item}/>
                        </Col>
                    ))}
                </Row>
            ):null}
        </>
    )
}

export default Home
