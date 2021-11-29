import React from "react";
import './find-job.css';

export const FindJob = props => {
    return(
        <div className='content'>
            <h2>Content</h2>
            <p>{props.message}</p>
            <h4>Find Job</h4>
            <a href="https://djinni.co/q/eda172bb85/">DJINNI</a>
            <a href="https://www.work.ua/ru/jobseeker/my/resumes/view/?id=7768305">WORK</a>
            <a href="https://ua.jooble.org/profile/review?isProfileSessionOpened=true&profileReferrer=12">JOOBLE</a>
            <a href="https://dou.ua/users/alexander-voronov-1/">DOU</a>
            <a href="https://account.rabota.ua/jobsearch/cvbuilder?resumeId=19522088">RABOTA</a>
            <a href=""></a>
            <a href=""></a>
        </div>
    )
}