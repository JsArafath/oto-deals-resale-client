import React from 'react';
// import { Link } from 'react-router-dom';
import image from '../../../assets/products/discount.png'

const Sales = () => {
    return (

        <section className=" lg:p-8 my-6 px-5 py-20">
            <div className="container mx-auto space-y-12">

                <div className="flex pr-9 flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src={image} alt="" className="w-96 mr-9" />
                    <div className="flex pr-9 pl-9 flex-col justify-center flex-1 p-6 mr-9">
                        <span className="text-xs uppercase ">Sale! Sale! Sale!</span>
                        <h3 className="text-4xl font-bold">Special 50% off for Students!!!</h3>
                        <p className="my-6 font-serif">We care about students. So, we arranged special discounts for students. What are you waiting for? Hurry Up!!</p>
                        <a
                            className="group flex items-center justify-between rounded-lg border border-gray-600 bg-gray-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring self-start"
                            href="/download"
                        >
                            <span
                                className="font-medium text-white transition-colors group-hover:text-gray-600 group-active:text-gray-500"
                            >
                                Find out more
                            </span>

                            <span
                                className="ml-4 flex-shrink-0 rounded-full border border-current bg-white p-2 text-gray-600 group-active:text-gray-500"
                            >
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Sales;