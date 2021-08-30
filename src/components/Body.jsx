import React from "react";
import "./body.css";
import Topbar from './Navbar'

function Body() {
    return (
        <>
            <Topbar />
            <section>
                <h3 className="text-primary"><u>SoftwareDevelopment:Testing:Quality:Assurance:Nepal</u></h3>
                <h1 className="text-white">Our Services</h1>
                <ol className="text-white">
                    <li typeof="number">ML:Machine Learning</li>
                    <li typeof="number">DP:DeepLearning</li>
                    <li typeof="number">AI:Artificial Intelligence</li>
                    <li typeof="number">QA:Quality Asurance</li>
                    <li typeof="number">CS:Cyber Security</li>
                    <li typeof="number">Hacking</li>
                    <li typeof="number">Security Testing</li>
                </ol>
            </section>

        </>

    )
}
export default Body;