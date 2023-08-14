import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { PenFill, Search, TrashFill } from 'react-bootstrap-icons'
import AddProduct from './AddProduct'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DeleteProductAsync, GetProductsAsync, getProductAsync, getProductsAsync } from '../../Service/Action/ProductAction'
import Loader from '../Loader/Loader'

function Product() {
    const [add, setAdd] = useState(false)
    const [isLoading, setIsLoading] = useState(true);


    
    const { Products, isEdit, totalPrice ,totalStock} = useSelector(state => state.productReducer)

    const handleClick = () => {
        setAdd(!add);
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleIsEdit = (id) => {
        dispatch(getProductAsync(id));
        // handleClick();
    }

    const [isDelete, setIsDelete] = useState(false)

    const handleDelete = (id) => {

        dispatch(DeleteProductAsync(id))
        setIsDelete(!isDelete)
    }

    const get = () => {
        dispatch(GetProductsAsync())
        // console.log(GetProductsAsync);
    }

    useEffect(() => {
        dispatch(getProductsAsync())
        get();
        setTimeout(()=>{
            setIsLoading(false);
        },2000)
    }, [])

    if (isEdit) {
        navigate('/updateproduct')
    } else {
        return (
            <>
                { 
                    isLoading ? (
                        <Loader/> 
                    ):(
                    add === true ? <AddProduct handleClick={handleClick} />
                        :

                        <>
                        
                            <div className="search-product mt-4 p-3">
                                <div className="d-flex">
                                    <div className="search-style-2 col-10 border-bottom border-dark border-3">
                                        <form action="#">
                                            <select className="select-active select2-hidden-accessible border-0" >
                                                <option data-select2-id={3}>All Categories</option>
                                                <option>Women's</option>
                                                <option>Men's</option>
                                                <option>Cellphones</option>
                                                <option>Computer</option>
                                                <option>Electronics</option>
                                                <option>Accessories</option>
                                                <option>Home &amp; Garden</option>
                                                <option>Luggage</option>
                                                <option>Shoes</option>
                                                <option>Mother &amp; Kids</option>
                                            </select>
                                            <Search />
                                            <input type="text" className='border-0 ps-3' placeholder="Search for items..." />
                                        </form>
                                    </div>
                                    <div className='col-2 d-flex justify-content-end'>
                                        <Button onClick={handleClick}>Add Product</Button>
                                    </div>
                                </div>
                            </div>
                            <section className="mt-50 mb-50">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive">
                                                <table className="table table-bordered shopping-summery text-center">
                                                    <thead>
                                                        <tr className="main-heading">
                                                            <th className="col-2">Product</th>
                                                            <th className="col-3">Details</th>
                                                            <th className="col-2">Price</th>
                                                            <th className="col-2">Stock Available</th>
                                                            <th className="col-3">Action</th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        Products.map((pro) => {
                                                            return (
                                                                <>
                                                                    <tbody className='border-1 col'>
                                                                        <tr>
                                                                            <td className="image product-thumbnail col-2">
                                                                                <img src={pro.img} className='w-75 my-3' alt="" />
                                                                            </td>
                                                                            <td className="product-des product-name col-3">
                                                                                <h5 className="product-name">
                                                                                    <a href="" className='text-decoration-none'>{pro.title}</a>
                                                                                </h5>
                                                                                <p className="font-xs">{pro.details}</p>
                                                                            </td>
                                                                            <td className="price col-2"><span>&#8377;{pro.price}</span></td>
                                                                            <td className="text-center col-2" >
                                                                                <span className="color3 font-weight-bold">{pro.stock}</span>
                                                                            </td>
                                                                            <td className='col-3'>
                                                                                <div className='d-flex justify-content-around my-3 '>
                                                                                    <Button variant='primary' onClick={() => handleIsEdit(pro.id)}>
                                                                                        Edit
                                                                                    </Button>
                                                                                    ||
                                                                                    <Button variant='danger' onClick={() => handleDelete(pro.id)}>
                                                                                        Delete 
                                                                                    </Button>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                    <thead >
                                                        <tr className="main-heading">
                                                            <th scope="col" colSpan={2}>Total</th>
                                                            <th scope="col" colSpan={1}>&#8377;{totalPrice} </th>
                                                            <th scope="col" colSpan={1}>{totalStock} </th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                }
            </>
        )
    }
}

export default Product