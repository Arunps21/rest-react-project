import React from "react";
import Accordion from 'react-bootstrap/Accordion';

function Reviews({reviewList}) {
  return (
    <>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Reviews</Accordion.Header>
        <Accordion.Body>
         {reviewList.map(item=>(
            <>
                <p>{item.id}</p><hr/>
                <h6>{item.user}</h6><hr/>
                <h4>{item.rating}</h4><hr/>
                <p>{item.comment}</p><hr/>
                <p>{item.date}</p><hr/>
            </>
         ))}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Reviews;
