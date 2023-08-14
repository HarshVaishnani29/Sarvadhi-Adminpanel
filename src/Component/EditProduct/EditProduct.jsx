import React, { useState } from 'react'
import { Button, Container, Form, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { UpDateProductAsync } from '../../Service/Action/ProductAction';
import "./EditProduct.css"
import { useNavigate } from 'react-router-dom';

function EditProduct({ handleClick }) {

    const { Product, isEdit } =useSelector(state => state.productReducer)
    const [product, setProduct] = useState(Product)

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setProduct({ ...product, [name]: value })
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()
        dispatch(UpDateProductAsync(product))
        // handleClick();
        setProduct({
            img: "",
            title: "",
            details: "",
            price: "",
            stock: ""
        })
    }

    if (!isEdit) {
        navigate('/product')
    } else {
        return (
            <>
                <div className='form-wrapper d-flex justify-content-center align-items-center ' style={{ margin: "70px" }}>
                    <Container className='wrapper'>
                        <Card className='p-4 border-dark text-white bg-primary d-flex justify-content-center align-items-center' >
                            <Row className='align-item-center row grid-divider'>
                                <Col className="d-flex col-6">
                                    <Form onSubmit={(e) => { handleSubmit(e) }} style={{ width : "470px"}}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Image</Form.Label>
                                            <Form.Control placeholder="Add Image Url" name='img' value={product.img} onChange={(e) => { handleChange(e) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text" placeholder="Enter title" name='title' value={product.title} onChange={(e) => { handleChange(e) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Details</Form.Label>
                                            <Form.Control type="text" placeholder="enter products details" name='details' value={product.details} onChange={(e) => { handleChange(e) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="text" placeholder="product price" name='price' value={product.price} onChange={(e) => { handleChange(e) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Stock</Form.Label>
                                            <Form.Control type="text" placeholder="product stock" name='stock' value={product.stock} onChange={(e) => { handleChange(e) }} />
                                        </Form.Group>
                                        <div className='d-flex justify-content-center'>
                                            <Button variant="primary" type="submit">
                                                Update
                                            </Button>
                                        </div>
                                    </Form>
                                </Col>
                                <Col className='d-flex col-6'>
                                    <div className='d-flex align-items-center'>
                                        <img className="mx-3" style={{ maxHeight: "450px", width: "470px", borderRadius: "5px" }} src='img/SearchProduct.jpg' alt='' />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div >
            </>
        )
    }
}

export default EditProduct