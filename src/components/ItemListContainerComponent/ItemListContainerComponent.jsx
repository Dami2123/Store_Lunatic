import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemListContainerComponent = ({products}) => {

  
  
  return <div className='contCardProduct'>
   {products.map((product)=>{
    return(
     
      <Card key={product.id} className='cardProduct' style={{ width: '15rem' }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Precio: $
         {product.price}
        </Card.Text>
        <Button className='buttonCard' variant="primary"><Link to={`/item/${product.id}`} className='dropItem' >Ver</Link></Button>
      </Card.Body>
    </Card>
   
    )
  }
  )
}</div>}

export default ItemListContainerComponent

