import { Link, Head } from "@inertiajs/react";
import React, { useEffect } from 'react';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';
export default function Welcome() {
    useEffect(() => {
        $('.slick_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            infinite: true,
            autoplaySpeed: 2000,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }, []);
    return (
        <>
            <Head title="Home Remedies" />
            <div className="header_banner">
                <div className="banner_top">
                    <img src="Images/banner.png" alt="banner" />
                </div>
                <div className="header_banner_wrapper">
                    <Navbar />
                    <section className="banner_section">
                        <div className="left_section">
                            <div className="left_top">
                                <h3>
                                    Healthy<span> living made easy!!</span>
                                </h3>
                                <p>
                                    Get your custom plans <br />& one-on-one
                                    guidance from our experts
                                </p>
                            </div>
                            <div className="bottom">
                                <button className="sign_in">Sign in</button>
                                <p>
                                    <small>Sign in & get started today</small>
                                </p>
                            </div>
                        </div>
                        <div className="right_section">
                            <img src="Images/pngwing.png" alt="banner_image" />
                        </div>
                    </section>
                </div>
                <div className="banner_bg_image">
                    <img src="Images/after.png" alt="Banner Background" />
                </div>
            </div>
            <div className="container">
                <section className="healhty_lifestyle">
                    <div className="top_content">
                        <h2>LIFESTYLE</h2>
                        <span>Why healthy</span>
                    </div>
                    <div className="bottom_content">
                        <div className="left_content">
                            <ul>
                                <li>Improved physical health</li>
                                <li>Better mental health</li>
                                <li>Increased longevity</li>
                                <li>Weight management</li>
                                <li>Improved self-confidence</li>
                                <li>Reduced stress</li>
                            </ul>
                        </div>
                        <div className="right_image">
                            <img src="Images/Yoga.png" alt="Yoga" />
                            <img src="Images/Nature.png" alt="Nature" />
                            {/* <img src="Images/Food.png" alt="Food" /> */}
                        </div>
                    </div>
                </section>
                <section className="healthy_bite">
                    <div className="top_content">
                        <h2>
                            Have a <span>Healthy Bite</span> for
                        </h2>
                    </div>
                    <div className="cards_wrap">
                        <div className="cards">
                            <div className="card_inner">
                                <div className="left_image">
                                    <img src="Images/pngwing4.png" alt="Pngwing4 Image" />
                                </div>
                                <div className="right_content">
                                    <h3>Find a diet you love</h3>
                                    <p>
                                        Find a nutritious Diet that fits your lifestyle and food preferences. Take charge of
                                        your daily habits with one of the many ongoing Diets including Clean Eating and High
                                        Protein
                                    </p>
                                </div>
                            </div>
                            <div><img src="Images/Divider2.png" alt="" /></div>
                        </div>
                        <div className="cards">
                            <div className="card_inner">
                                <div className="left_image">
                                    <img src="Images/pngwing1.png" alt="Pngwing4 Image" />
                                </div>
                                <div className="right_content">
                                    <h3>Start a simplified meal plan</h3>
                                    <p>
                                        Follow a 7-21 day Meal Plan and get four pre-planned recipes a day. Depending on
                                        your health goals, there are many Meal Plans to choose from including Keto Burn and
                                        Vegan for a week.
                                    </p>
                                </div>
                            </div>
                            <div><img src="Images/Divider2.png" alt="" /></div>
                        </div>
                        <div className="cards">
                            <div className="card_inner">
                                <div className="left_image">
                                    <img src="Images/pngwing2.png" alt="Pngwing4 Image" />
                                </div>
                                <div className="right_content">
                                    <h3>Track your way to success</h3>
                                    <p>
                                        Track your activities and what you eat with the help of our food-, exercise- and
                                        water trackers to maintain a balanced everyday life.
                                    </p>
                                </div>
                            </div>
                            <div><img src="Images/Divider2.png" alt="" /></div>
                        </div>
                        <div className="cards">
                            <div className="card_inner">
                                <div className="left_image">
                                    <img src="Images/pngwing3.png" alt="Pngwing4 Image" />
                                </div>
                                <div className="right_content">
                                    <h3>Start your own healthy journey</h3>
                                    <p>
                                        To help you reach your goals and customize your health journey you can add your
                                        favorite meals, food items, recipes and exercises to your Favorites.
                                    </p>
                                </div>
                            </div>
                            <div><img src="Images/Divider2.png" alt="" /></div>
                        </div>
                    </div>
                </section>
                <section className="healthy_dite">
                    <div className="top_content">
                        <h2>
                            What is a
                            <span>HealthyBite</span>
                            for you ?
                        </h2>
                    </div>
                    <div className="bottom_content">
                        <div className="left_image">
                            <img src="Images/Tech_Image.png" alt="" />
                        </div>
                        <div className="right_content">
                            <ul>
                                <li>Diet tracker</li>
                                <li>Best nutrition advice</li>
                                <li>Exercise portal</li>
                                <li>Meal planner</li>
                                <li>Recipes database</li>
                                <li>One stop shop for nutritions</li>
                                <li>Community</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <div className="products_wrapper">
                <div className="container">
                    <section className="products">
                        <div className="top_content">
                            <h2>
                                Dite <span> Products</span>
                            </h2>
                            <p>HealthyBite making it easy for you to get your diet product supply from the same platform as
                                well</p>
                            <ul>
                                <li>Search from a wide range</li>
                                <li>Get the best one recommended from the nutritionist</li>
                            </ul>
                        </div>
                        <div className="slider_section">
                            <div className="slick_slider">
                                <div className="slide_outer">
                                    <div className="slides">
                                        <div className="left_content">
                                            <h4>Whey protein Bodybuilding supplement Nutrition</h4>
                                            <span>Net wt : 1.7kg</span>
                                            <img src="Images/stars.png" alt="Rating Stars" />
                                        </div>
                                        <div className="right_image">
                                            <img src="Images/Product.png" alt="productes" />
                                        </div>
                                    </div>
                                </div>
                                <div className="slide_outer">
                                    <div className="slides">
                                        <div className="left_content">
                                            <h4>Whey protein Bodybuilding supplement Nutrition</h4>
                                            <span>Net wt : 1.7kg</span>
                                            <img src="Images/stars.png" alt="Rating Stars" />
                                        </div>
                                        <div className="right_image">
                                            <img src="Images/Product.png" alt="productes" />
                                        </div>
                                    </div>
                                </div>
                                <div className="slide_outer">
                                    <div className="slides">
                                        <div className="left_content">
                                            <h4>Whey protein Bodybuilding supplement Nutrition</h4>
                                            <span>Net wt : 1.7kg</span>
                                            <img src="Images/stars.png" alt="Rating Stars" />
                                        </div>
                                        <div className="right_image">
                                            <img src="Images/Product.png" alt="productes" />
                                        </div>
                                    </div>
                                </div>
                                <div className="slide_outer">
                                    <div className="slides">
                                        <div className="left_content">
                                            <h4>Whey protein Bodybuilding supplement Nutrition</h4>
                                            <span>Net wt : 1.7kg</span>
                                            <img src="Images/stars.png" alt="Rating Stars" />
                                        </div>
                                        <div className="right_image">
                                            <img src="Images/Product.png" alt="productes" />
                                        </div>
                                    </div>
                                </div>
                                <div className="slide_outer">
                                    <div className="slides">
                                        <div className="left_content">
                                            <h4>Whey protein Bodybuilding supplement Nutrition</h4>
                                            <span>Net wt : 1.7kg</span>
                                            <img src="Images/stars.png" alt="Rating Stars" />
                                        </div>
                                        <div className="right_image">
                                            <img src="Images/Product.png" alt="productes" />
                                        </div>
                                    </div>
                                </div>
                                <div className="slide_outer">
                                    <div className="slides">
                                        <div className="left_content">
                                            <h4>Whey protein Bodybuilding supplement Nutrition</h4>
                                            <span>Net wt : 1.7kg</span>
                                            <img src="Images/stars.png" alt="Rating Stars" />
                                        </div>
                                        <div className="right_image">
                                            <img src="Images/Product.png" alt="productes" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
