import React, { Component } from "react";
import {Card,Button} from 'react-bootstrap';
 
class Photos extends Component {
  render() {
    return (
      <div style={{marginLeft:'35%'}}>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </div>
    );
  }
}
 
export default Photos;