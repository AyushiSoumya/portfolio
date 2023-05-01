import React from 'react'
import './styles/Home.scss';
import { FaArrowCircleDown } from "react-icons/fa";



function Home() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('AYUSHI SOUMYA RESUME.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'AYUSHI SOUMYA RESUME.pdf';
                alink.click();
            })
        })
    }
    return (

        <>        <div className="home_container">
            <div className="home_container1">
                <div className="greetings">

                    <h2 className="font">Welcome to my profile page</h2>
                    <p>
                        Hi there! I am Ayushi, and I'm a BTech student at PES University,Bengaluru.<br />
                        I'm passionate about coding and programming, and I'm always<br />
                        looking for new ways to learn and grow. I'm excited to connect with
                        <br />others who share my interests and to learn from different perspectives.
                    </p>
                </div>
                <div className="photo">
                    <img className="pic" src={require('C:\\Users\\ASUS\\Desktop\\My_Portfolio\\my_portfolio\\src\\profile_pic.png')} />
                </div>
            </div>
            <div className="home_container2">
                <div >
                    <a href="https://drive.google.com/drive/u/0/folders/1Vw3EH2IU6CCPR1gh9QFqFbTtA3BWIuSc">Click here to view certificates</a>
                </div>
                <div className="Click">
                    Click here to download resume
                </div>
                <div  >
                    <FaArrowCircleDown className="buttonresume" onClick={onButtonClick} />
                </div>

            </div>

        </div>

        </>
    );
}
export default Home;