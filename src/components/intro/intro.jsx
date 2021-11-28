import React from 'react';
import './intro.css';
import {ReactComponent as MyFace} from "../../img/my-foto.svg";

const Intro = (props) => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Aleksandr Voronov</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">
                                Frontend developer
                            </div>
                            <div className="i-title-item">
                                React developer
                            </div>
                            <div className="i-title-item">
                                Javascript developer
                            </div>
                            <div className="i-title-item">
                                Typescript developer
                            </div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, with services and online stores
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <MyFace className="i-img"/>
            </div>
        </div>
    );
}

export default Intro;