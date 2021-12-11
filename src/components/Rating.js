import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'
function Rating({data}) {
   const reviews =data
   console.log(reviews);
    return (
        <> 
            {reviews.map((review) => (
                <Card className="my-3 p-3 rounded cards" >
                <Card.Body>
                    <Card.Title as="div">
                        <h4>{review.name}</h4>
                    </Card.Title>
                    <Card.Text as="div">
                        <p><strong>Date:</strong>{review.date}</p>
                    </Card.Text>
                    <Card.Text as="div">
                        <p><strong>Rating : {review.rating}</strong>⭐</p>
                    </Card.Text>
                    <Card.Text as="div">
                        <p><strong>Comments : </strong>{review.comments}</p>
                    </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </>
    )
}

export default Rating
