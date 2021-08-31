import React from "react";
import "./body.css";
import Topbar from './Navbar';
import { Email, Phone } from '@material-ui/icons';

function Body() {
    return (
        <>
            <Topbar />
            <section>
                <h3 className="text-primary"><u>SoftwareDevelopment:Testing:Quality:Assurance:Nepal</u></h3>

                <ul className="text-white">
                    <li ><h5>ML:Machine Learning,DP:DeepLearning,AI:Artificial,AI:Artificial Intelligence </h5></li>
                    <li ><h5>QA:Quality Asurance,CS:Cyber Security,Hacking,Security Testing ,Kalilinux</h5></li>

                </ul>
                <h6>{<Phone />} Contact:+9779841224387,+9779801034557 {<Email />} Email:wowdevqa@wowdevqa.com,lavakafle@wowdevqa.com</h6>
            </section>

        </>

    )
}
export default Body;