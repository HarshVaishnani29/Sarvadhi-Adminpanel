import React, { useEffect, useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { Activity, Calendar3, Cart3, Envelope, GraphUpArrow, Percent, Plus, Save, Stack, StarFill, StarHalf } from 'react-bootstrap-icons'
import './Dashboard.css'
import DatePicker from 'react-multi-date-picker';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../Component/Loader/Loader';

function Dashboard() {

    const [show, setShow] = useState(false);

    const { Products, totalPrice } = useSelector(state => state.productReducer)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate some asynchronous data loading
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);


    return (
        <>
            {isLoading ? (
                <Loader/> 
            ) : (
            <div className='container-fluid'>
                <div className='d-flex py-3'>
                    <div className='col-6'>
                        <h5>
                            Good Morning, Buddy
                        </h5>
                        <p className='m-0'>
                            Hare's what's happening with your store today.
                        </p>
                    </div>
                    <div className='col-6 d-flex align-items-center justify-content-end'>
                        <div className='calender d-flex align-items-center px-2'>
                            <div className='w-10 bg-white shadow-sm p-2 rounded-start'>
                                <DatePicker
                                    range
                                    dateSeparator=" to "
                                    className='green'
                                />
                            </div>
                            <div className='w-2 bg-primary p-2 text-white rounded-end'>
                                <Calendar3 />
                            </div>
                        </div>
                        <div className='cta-btn px-2'>
                            <NavLink to="/product">
                                <Button variant='success'>
                                    <Plus className='me-2' />
                                    <span>
                                        Add Product
                                    </span>
                                </Button>
                            </NavLink>
                        </div>
                        <div className='recentactivity px-2'>
                            <div className=''>
                                <Button variant="primary" onClick={handleShow}>
                                    <Activity />
                                </Button>

                                <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>Recent Activity</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div className='d-flex mb-3'>
                                            <div className='icons col-1 me-4 rounded-circle fs-6 mt-2'>
                                                <div className='ic'>
                                                    <Cart3 />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 col ms-1"><h6 class="mb-1 lh-base">Purchase by James Price</h6><p class="text-muted mb-1">Product noise evolve <br />    smartwatch </p><small className="mb-0 text-muted">02:14 PM Today</small></div>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='icons-1 me-4 col-1 rounded-circle fs-6 mt-2'>
                                                <div className='ic'>
                                                    <Stack />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 col ms-1">
                                                <h6 className="mb-1 lh-base">
                                                    Added new style collection
                                                </h6>
                                                <p className="text-muted mb-1">
                                                    By Nesta Technologies
                                                </p>
                                                <div className="d-inline-flex gap-2 border border-dashed p-2 mb-2">
                                                    <a className="bg-light rounded p-1" href="index.html">
                                                        <img src='../img/tshirt.png' alt="" className="img-fluid d-block" />
                                                    </a>
                                                    <a className="bg-light rounded p-1" href="index.html">
                                                        <img src='../img/sofa.png' alt="" className="img-fluid d-block" />
                                                    </a>
                                                    <a className="bg-light rounded p-1" href="index.html">
                                                        <img src='../img/bag.png' alt="" className="img-fluid d-block" />
                                                    </a>
                                                </div>
                                                <p className="mb-0 text-muted">
                                                    <small>9:47 PM Yesterday</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex ">
                                            <div className="flex-shrink-0 ico ms-0">
                                                <img src='../img/velzon.jpg' alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div className="flex-grow-1 ms-4">
                                                <h6 className="mb-1 lh-base ">
                                                    Natasha Carey have liked the products
                                                </h6>
                                                <p className="text-muted mb-1 text-secondary">
                                                    Allow users to like products in your WooCommerce store.
                                                </p>
                                                <small className="mb-0 text-muted text-secondary">25 Dec, 2021</small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0">
                                                <div className="avatar-xs acitivity-avatar">
                                                    <div className="avatar-title rounded-circle">
                                                        <div className='icons-2 me-1 ms-0 col-1 rounded-circle fs-6 mt-2'>
                                                            <div className='ic'>
                                                                <Percent />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">
                                                    Today offers by
                                                    <a className="link-secondary" href="/velzon/react/default/apps-ecommerce-seller-details">
                                                        Digitech Galaxy
                                                    </a>
                                                </h6>
                                                <p className="text-muted mb-2">
                                                    Offer is valid on orders of Rs.500 Or above for selected products only.
                                                </p>
                                                <small className="mb-0 text-muted">12 Dec, 2021</small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0">
                                                <div className="avatar-xs acitivity-avatar">
                                                    <div className="avatar-title rounded-circle text-danger">
                                                        <div className='icons-1 me-1 ms-0 col-1 rounded-circle fs-6 mt-2'>
                                                            <div className='ic'>
                                                                <Save />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">
                                                    Favoried Product
                                                </h6>
                                                <p className="text-muted mb-2">
                                                    Esther James have favorited product.
                                                </p>
                                                <small className="mb-0 text-muted">
                                                    25 Nov, 2021
                                                </small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0">
                                                <div className="avatar-xs acitivity-avatar">
                                                    <div className="avatar-title rounded-circle">
                                                        <div className='icons-2 me-1 ms-0 col-1 rounded-circle fs-6 mt-2'>
                                                            <div className='ic'>
                                                                <Percent />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">
                                                    Flash sale starting
                                                    <span className="text-primary">Tomorrow
                                                        .</span>
                                                </h6>
                                                <p className="text-muted mb-0">
                                                    Flash sale by
                                                    <a className="link-secondary fw-medium" href="/velzon/react/default/dashboard">
                                                        Zoetic Fashion
                                                    </a>
                                                </p>
                                                <small className="mb-0 text-muted">
                                                    22 Oct, 2021
                                                </small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0">
                                                <div clasNames="avatar-xs acitivity-avatar">
                                                    <div className="avatar-title rounded-circle bg-soft-info text-info">
                                                        <div className='icons me-1 ms-0 col-1 rounded-circle fs-6 mt-2'>
                                                            <div className='ic'>
                                                                <GraphUpArrow />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">
                                                    Monthly sales report
                                                </h6>
                                                <p className="text-muted mb-2">
                                                    <span className="text-danger">
                                                        2 days left
                                                    </span>
                                                    &nbsp; notification to submit the monthly sales report.
                                                    <a className="link-warning text-decoration-underline" href="/velzon/react/default/dashboard">
                                                        Reports Builder
                                                    </a>
                                                </p>
                                                <small className="mb-0 text-muted">
                                                    15 Oct
                                                </small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item d-flex">
                                            <div className="flex-shrink-0 ico ms-0 mt-2">
                                                <img src='../img/velzo.jpg' alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">
                                                    Frank Hook Commented
                                                </h6>
                                                <p className="text-muted mb-2 fst-italic">
                                                    " A product that has reviews is more likable to be sold than a product. "
                                                </p>
                                                <small className="mb-0 text-muted">
                                                    26 Aug, 2021
                                                </small>
                                            </div>
                                        </div>
                                        <div className="p-3 mt-2 mb-1">
                                            <h6 className="text-muted mb-3 text-uppercase fw-semibold">
                                                Top 10 Categories
                                            </h6>
                                            <ol className="ps-3 text-muted">
                                                <li className="py-1">
                                                    <a className="text-muted text-decoration-none" href="/velzon/react/default/dashboard">
                                                        Mobile &amp; Accessories
                                                        <span className="float-end">
                                                            (10,294)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a className="text-muted text-decoration-none" href="/velzon/react/default/dashboard">
                                                        Desktop
                                                        <span className="float-end">
                                                            (6,256)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a class="text-muted text-decoration-none" href="/velzon/react/default/dashboard">
                                                        Electronics
                                                        <span className="float-end">
                                                            (3,479)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a className="text-muted text-decoration-none" href="/velzon/react/default/dashboard">
                                                        Home &amp; Furniture
                                                        <span className="float-end">
                                                            (2,275)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a className="text-muted text-decoration-none" href="/velzon/react/default/dashboard">
                                                        Grocery
                                                        <span className="float-end">
                                                            (1,950)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a className="text-muted text-decoration-none" href="/velzon/react/default/dashboard">
                                                        Fashion
                                                        <span className="float-end">
                                                            (1,582)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a className="text-muted text-decoration-none" href="/velzon/react/default/dashboard">
                                                        Appliances
                                                        <span className="float-end">
                                                            (1,037)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a className="text-muted text-decoration-none" href="/velzon/react/default/dashboard">
                                                        Beauty, Toys &amp; More
                                                        <span className="float-end">
                                                            (924)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a className="text-muted text-decoration-none" href="/velzon/react/default/dashboard">
                                                        Food &amp; Drinks
                                                        <span className="float-end">
                                                            (701)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a className="text-muted text-decoration-none" href="/velzon/react/default/dashboard">
                                                        Toys &amp; Games
                                                        <span className="float-end">
                                                            (239)
                                                        </span>
                                                    </a>
                                                </li>
                                            </ol>
                                            <div className="mt-3 text-center">
                                                <a className="text-muted text-decoration-underline" href="/velzon/react/default/dashboard">
                                                    View all Categories
                                                </a>
                                            </div>
                                        </div>
                                        <div className="p-3" style={{ marginTop: '80px' }}>
                                            <h6 class="text-dark text-uppercase fw-semibold mt-5">Products Reviews</h6>
                                            <div className="swiper swiper-initialized swiper-vertical mySwiper vertical-swiper swiper-backface-hidden" style={{ height: 250 }}>
                                                <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, -130px, 0px)', transitionDuration: '0ms' }}>
                                                    <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index={0} style={{ height: 150, marginBottom: 10 }}>
                                                        <div className="border border-dashed shadow-none card">
                                                            <div className="card-body">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar-sm">
                                                                        <div className="avatar-title bg-light rounded ico">
                                                                            <img src='../img/vel.png' alt='' />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div>
                                                                            <p className="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                                " Great product and looks great, lots of features. "
                                                                            </p>
                                                                            <div className="fs-11 align-middle text-warning">
                                                                                <StarFill />
                                                                                <StarFill />
                                                                                <StarFill />
                                                                                <StarFill />
                                                                                <StarHalf />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-end mb-0 text-muted">
                                                                            - by
                                                                            <cite title="Source Title">
                                                                                Force Medicines
                                                                            </cite>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={1} style={{ height: 150, marginBottom: 10 }}>
                                                        <div className="border border-dashed shadow-none card">
                                                            <div className="card-body">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 roll">
                                                                        <img src='../img/velzon.jpg' alt='' className="avatar-sm rounded" />
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div>
                                                                            <p className="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                                " Amazing template, very easy to understand and manipulate. "
                                                                            </p>
                                                                            <div className="fs-11 align-middle text-warning">
                                                                                <StarFill />
                                                                                <StarFill />
                                                                                <StarFill />
                                                                                <StarFill />
                                                                                <StarHalf />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-end mb-0 text-muted">
                                                                            - by
                                                                            <cite title="Source Title">
                                                                                Henry Baird
                                                                            </cite>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index={0} style={{ height: 150, marginBottom: 10 }}>
                                                        <div className="border border-dashed shadow-none card" style={{ marginTop: 40 }} >
                                                            <div className="card-body">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar-sm" >
                                                                        <div className="avatar-title bg-light rounded ico">
                                                                            <img src='../img/ve.png' alt='' />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div>
                                                                            <p className="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                                " Great product and looks great, lots of features. "
                                                                            </p>
                                                                            <div className="fs-11 align-middle text-warning">
                                                                                <StarFill />
                                                                                <StarFill />
                                                                                <StarFill />
                                                                                <StarFill />
                                                                                <StarHalf />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-end mb-0 text-muted">
                                                                            - by
                                                                            <cite title="Source Title">
                                                                                Force Medicines
                                                                            </cite>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide" data-swiper-slide-index={3} style={{ height: 150, marginBottom: 10 }}>
                                                        <div className="border border-dashed shadow-none card mt-1">
                                                            <div className="card-body ">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 roll">
                                                                        <img src='../img/velzo.jpg' alt='' className="avatar-sm rounded" />
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div>
                                                                            <p className="text-muted mb-1 fst-italic text-truncate-two-lines">" The product is very beautiful. I like it. "
                                                                            </p>
                                                                            <div className="fs-11 align-middle text-warning">
                                                                                <StarFill />
                                                                                <StarFill />
                                                                                <StarFill />
                                                                                <StarFill />
                                                                                <StarHalf />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-end mb-0 text-muted">
                                                                            - by
                                                                            <cite title="Source Title">
                                                                                Nancy Martino
                                                                            </cite>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3" style={{ marginTop: '260px' }}>
                                            <h6 className="text-muted mb-3 text-uppercase fw-semibold">
                                                Customer Reviews
                                            </h6>
                                            <div className="bg-light px-3 py-2 rounded-2 mb-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <div className="fs-16 align-middle text-warning">
                                                            <StarFill />
                                                            <StarFill />
                                                            <StarFill />
                                                            <StarFill />
                                                            <StarHalf />
                                                        </div>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h6 className="mb-0">
                                                            4.5 out of 5
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-muted">
                                                    Total
                                                    <span className="fw-medium">
                                                        5.50k
                                                    </span>
                                                    reviews
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="align-items-center g-2 row">
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0">
                                                                5 star
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="p-1">
                                                            <div className="progress animated-progess progress-sm">
                                                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow="50.16" aria-valuemin={0} aria-valuemax={100} style={{ width: '50.16%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0 text-muted">
                                                                2758
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="align-items-center g-2 row">
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0">
                                                                4 star
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="p-1">
                                                            <div className="progress animated-progess progress-sm">
                                                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow="29.32" aria-valuemin={0} aria-valuemax={100} style={{ width: '29.32%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0 text-muted">
                                                                1063
                                                            </h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="align-items-center g-2 row">
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0">
                                                                3 star
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="p-1">
                                                            <div className="progress animated-progess progress-sm">
                                                                <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="18.12" aria-valuemin={0} aria-valuemax={100} style={{ width: '18.12%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0 text-muted">
                                                                997
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="align-items-center g-2 row">
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0">
                                                                2 star
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="p-1">
                                                            <div className="progress animated-progess progress-sm">
                                                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow="4.98" aria-valuemin={0} aria-valuemax={100} style={{ width: '4.98%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0 text-muted">
                                                                227
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="align-items-center g-2 row">
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0">
                                                                1 star
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="p-1">
                                                            <div className="progress animated-progess progress-sm">
                                                                <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="7.42" aria-valuemin={0} aria-valuemax={100} style={{ width: '7.42%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0 text-muted">
                                                                408
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sidebar-alert bg-light border-0 text-center mx-4 mb-0 mt-3 card">
                                            <div className="card-body">
                                                <img src='../img/gift.jpg' alt='' />
                                                <div className="mt-4">
                                                    <h5>
                                                        Invite New Seller
                                                    </h5>
                                                    <p className="text-muted lh-base">
                                                        Refer a new seller to us and earn $100 per refer.
                                                    </p>
                                                    <Button type="button" className="btn btn-primary btn-label rounded-pill">
                                                        <Envelope className=" label-icon align-middle fs-16 me-2" /> Invite Now
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-xl-3 col-sm-6 mb-3'>
                        <div className='card text-white bg-warning o-hidden h-100'>
                            <div className='card-body'>
                                <div className='text-center card-font-size p-3'>
                                    All Products <br></br>
                                    {
                                        Products.length
                                    }
                                </div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/product">
                                <span className='float-left'>
                                    View Details
                                </span>
                                <span className='float-right'>
                                    <i className='fa fa-angle-right'></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className='col-xl-3 col-sm-6 mb-3'>
                        <div className='card text-white bg-info o-hidden h-100'>
                            <div className='card-body'>
                                <div className='text-center card-font-size p-3'>
                                    Total Amount <br></br>
                                    <span>
                                        {
                                            totalPrice
                                        }&#8377;
                                    </span>
                                </div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/product">
                                <span className='float-left'>
                                    View Details
                                </span>
                                <span className='float-right'>
                                    <i className='fa fa-angle-right'></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className='col-xl-3 col-sm-6 mb-3'>
                        <div className='card text-white bg-success o-hidden h-100'>
                            <div className='card-body'>
                                <div className='text-center card-font-size p-3'>
                                    Users <br></br>
                                    <span>3</span>
                                </div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/product">
                                <span className='float-left'>
                                    View Details
                                </span>
                                <span className='float-right'>
                                    <i className='fa fa-angle-right'></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className='col-xl-3 col-sm-6 mb-3'>
                        <div className='card text-white bg-danger o-hidden h-100'>
                            <div className='card-body'>
                                <div className='text-center card-font-size p-3'>
                                    In the Stock <br></br>
                                    <span>0</span>
                                </div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/product">
                                <span className='float-left'>
                                    View Details
                                </span>
                                <span className='float-right'>
                                    <i className='fa fa-angle-right'></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
            )
        }


            
        </>
    )
}

export default Dashboard