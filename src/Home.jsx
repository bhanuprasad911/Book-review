import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { AuthContext } from './context/AuthContext';
import { BooklistContext } from './context/BooklistContext';
import TryLogin from './TryLogin';
import Smallcard from './Smallcard.jsx';
import homeStyle from './styles/Home.module.css';
import Head from './Head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Home() {
    const { user, logout } = useContext(AuthContext);
    const { recentbooklist } = useContext(BooklistContext);
    const navigate = useNavigate();

    // Reverse recent book list to show latest books first
    const updatedarray = recentbooklist.slice().reverse();

    function handleLogout() {
        logout();
        navigate('/');
    }

    if (!user) {
        return <TryLogin />;
    }

    // Custom Arrows for Slick Carousel
    const NextArrow = ({ onClick }) => (
        <div className={homeStyle.nextArrow} onClick={onClick}>
            <FaArrowRight />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className={homeStyle.prevArrow} onClick={onClick}>
            <FaArrowLeft />
        </div>
    );

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5, // Default for large screens
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <Head>
                <Link className={homeStyle.links} to={'/books'}>Books</Link>
                <Link className={homeStyle.links} to={`/user/${user.username}`}>
                    {user.username}
                </Link>
                <button onClick={handleLogout} className={homeStyle.button}>Logout</button>
            </Head>

            <h1>Recent Books</h1>

            {/* Carousel for Recent Books */}
            <div className={homeStyle.carouselContainer}>
                <Slider {...settings}>
                    {updatedarray.map((book) => (
                        <div key={book.id}>
                            <Link to={`/book/${book.id}`}>
                                <Smallcard
                                    title={book.title}
                                    author={book.author}
                                    img={book.image}
                                />
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Home;
