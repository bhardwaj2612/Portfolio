import React, { useState } from 'react';
import quiz from "../image/quizScreenshot.png"
import qr from "../image/QRScreenshot .png"
import Home from "../image/HOME.png"
import food from "../image/food.png"

const Tab = () => {
    const [activeTab, setActiveTab] = useState(1);

    const toggelTab = (count) => (
        setActiveTab(count)
    )
    // console.log(activeTab)

    return (
        <div className="tabs-container container">
            <div className="bloc-tabs">
                <div className={activeTab === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggelTab(1)}>Quiz Web</div>
                <div className={activeTab === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggelTab(2)}>Personal Website
                </div>
                <div className={activeTab === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggelTab(3)}>Food Delivery</div>
                <div className={activeTab === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggelTab(4)}>QR App</div>
            </div>
            <div className="content-tabs">

                <div className={activeTab === 1 ? "content active-content" : "content"}  >
                    <h2>Quiz Web Application</h2>
                    <hr />
                    <div className='container'>
                        <div className='row project-box'>
                            <div className='col discription'>
                                <ul>
                                    <li>The Quze app is a single-page web application built using React.js, featuring multiple interactive and
                                        user-friendly functionalities.</li>
                                    <li>Create a personalized dashboard for User and Admin.</li>
                                    <li>Displaying quiz history, scores, account details and Prepare quiz question By Admin and User can sign in or register and take Quiz.</li>
                                    <li>Technologies Used JavaScript, React.js, Redux Toolkit, Node js, Express.js, API, Bootstrap, CSS, HTML, Git, GitHub, VS Code.</li>

                                </ul>

                            </div>
                            <div className='col discription-img'>
                                <img alt='img' src={quiz} />

                            </div>
                        </div>
                    </div>
                </div>

                <div className={activeTab === 2 ? "content active-content" : "content"} >
                    <h2>Personal Website</h2>
                    <hr />
                    <div className='container'>
                        <div className='row project-box'>
                            <div className='col discription'>
                                <ul>
                                    <li>Utilized responsive design techniques to ensure optimal user experience across various devices</li>
                                    <li>Website co  ntain Education, Tools knows and updated Resume use different Packages.</li>
                                    <li>Technologies Used: React.Js, JavaScript, Bootstrap, Various Packages, HTML, CSS.</li>
                                </ul>
                            </div>
                            <div className='col discription-img'>
                                <img alt='img' src={Home} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className={activeTab === 3 ? "content active-content" : "content"}>
                    <h2>Food Delivery Web Application</h2>
                    <hr />
                    <div className='container'>
                        <div className='row project-box'>
                            <div className='col discription'>
                                <ul>
                                    <li>A food delivery web application designed to connect users with a variety of local restaurants.</li>
                                    <li>User can Signin or register to get in the application.</li>
                                    <li> Features include an intuitive user interface, real-time order tracking and a robust backend to manage
                                        orders, menus, and delivery logistics.</li>
                                    <li> Technologies Used: Next.JS, React, MongoDB, API, Various Packages, CSS, HTML</li>
                                </ul>
                            </div>
                            <div className='col discription-img'>
                                <img alt='img' src={food} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={activeTab === 4 ? "content active-content" : "content"}>
                    <h2>QR Generator Web Application</h2>
                    <hr />
                    <div className='container'>
                        <div className='row project-box'>
                            <div className='col discription'>
                                <ul>
                                    <li>This web application allows users to generate QR codes based on data provided to it.</li>
                                    <li>Conducted thorough testing and debugging to ensure the reliability and stability of the application.</li>
                                    <li> Technologies Used JavaScript, React js, JavaScript, Bootstrap, HTML, CSS</li>
                                </ul>
                            </div>
                            <div className='col discription-img'>
                                <img alt='img' src={qr} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Tab;
