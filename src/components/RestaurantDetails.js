import React,{useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import {Row,Col,Image,Card,ListGroup, ListGroupItem} from 'react-bootstrap'
import Rating from './Rating'
function RestaurantDetails() {

    const[data, setData] = useState([])
    const params = useParams()

    useEffect(() => {
        const fetchData = async () => {
            await fetch('/restaurants.json')
            .then((res) => res.json())
            .then((data) => setData(data.restaurants))
        }
        fetchData();
    }, [])

    const details=data.find((i) => i.id == params.id) 
    console.log(details);
    return (
        <>
        <Link className="btn btn-danger" to="/">Back</Link>
        {details?(
            <Row className="my-3">
                <Col md={3}>
                    <Image className="img" src={details.photograph} alt={details.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup.Item>
                        <h2>{details.name}</h2>
                        <p>{details.neighborhood}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p><strong>Cuisine: </strong>{details.cuisine_type}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p><strong>Address: </strong>{details.address}</p>
                    </ListGroup.Item>
                </Col>
                <Col md={4}>
                    <ListGroup.Item>
                        <h4>Operating Hours: </h4>
                        <p><strong>Monday:</strong> {details.operating_hours.Monday}</p>
                        <p><strong>Tuesday:</strong> {details.operating_hours.Tuesday}</p>
                        <p><strong>Wednesday:</strong> {details.operating_hours.Wednesday}</p>
                        <p><strong>Thursday:</strong> {details.operating_hours.Thursday}</p>
                        <p><strong>Friday:</strong> {details.operating_hours.Friday}</p>
                        <p><strong>Saturday:</strong> {details.operating_hours.Saturday}</p>
                        <p><strong>Sunday:</strong> {details.operating_hours.Sunday}</p>
                    </ListGroup.Item>
                </Col>

                <Row className="row">
                    <Col>
                        <Card className="my-3 p-3 rounded cards">
                            <Rating data={details.reviews} />
                        </Card>
                    </Col>
                </Row>
            </Row>
        ):null}
        </>
    )
}

export default RestaurantDetails
