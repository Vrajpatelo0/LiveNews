import React from 'react';
import { Row,Container,Col,Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Politics() {

    const [mydata,setData] = useState([]);
  const apiGet = () => {
    fetch('https://inshorts.deta.dev/news?category=politics')
    .then((response)=>response.json())
    .then((json)=>{
      console.log(json);
      setData(json.data);
    });
  };

  useEffect(()=>{
    apiGet();
    const interval = setInterval(()=>{
      apiGet();
    },500000);
    return () => clearInterval(interval);
  },[]);
  
  return (
    <div>
        <Container fluid>
      <Row xs={1} md={3} className="g-4">
        {
          mydata.map(
            (value)=>{
              return(
                <>
                   <Col className="container-fluid mt-4">
          <Card border='dark' className="card" >
          <Card.Img variant="top" height="300px" width="50%" src={value.imageUrl} className="content"/>
          <Card.Body>
          <Card.Title className='content'>{value.date}</Card.Title>
          <Card.Text className='content'>{value.content}</Card.Text>
          </Card.Body>
          </Card>
        </Col>
                </>
              );
            }
          )
        }
      </Row>
    </Container>
    </div>
  )
}
