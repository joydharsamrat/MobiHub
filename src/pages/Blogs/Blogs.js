import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
        <div className='my-12 lg:mx-24'>
            <Helmet>
                <title>MobiHub-Blogs</title>
            </Helmet>
            <h2 className='text-5xl font-bold text-center my-5'>Blogs</h2>
            <hr />
            <div className='my-12'>
                <h3 className='Text-3xl font-semibold'> What are the different ways to manage a state in a React application</h3>
                <p>
                    There are four main types of state you need to properly manage in your React apps:
                </p>
                <ul className=' my-5'>
                    <li> Local state</li>
                    <li>Global state </li>
                    <li> Server state </li>
                    <li>URL state</li>
                </ul>
                <div className='p-2 my-2'>
                    <h4 className='text-xl'>Local state</h4>
                    <p>Local state is data we manage in one or another component.</p>
                </div>
                <div className=' p-2 my-2'>
                    <h4 className='text-xl'>Global state</h4>
                    <p> Global state is data we manage across multiple components.</p>
                </div>
                <div className=' p-2 my-2'>
                    <h4 className='text-xl'>Server state</h4>
                    <p>Data that comes from an external server that must be integrated with our UI state.</p>
                </div>
                <div className=' p-2 my-2'>
                    <h4 className='text-xl'>URL state</h4>
                    <p>Data that exists on our URLs, including the pathname and query parameters.</p>
                </div>
            </div>
            <hr />
            <div className='my-12'>
                <h3 className='Text-3xl font-semibold'>How does prototypical inheritance work? </h3>
                <p >The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='my-12'>
                <h3 className='Text-3xl font-semibold'>What is a unit test? Why should we write unit tests?</h3>
                <p>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </div>
            <div>
                <h3 className='Text-3xl font-semibold'>React vs. Angular vs. Vue?</h3>
                <p>Both - Angular JS and React JS frameworks are used to create web interfaces for front end development. Angular is Google's matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You</p>
            </div>
        </div>
    );
};

export default Blogs;