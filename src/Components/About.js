import React from "react";
import './styles/About.scss';



const info = [
    {
        class: 'SCHOOLING',
        image: 'school.PNG',
        information: 'As a student at DPS Patna, I had an incredible school experience that helped me develop academically and personally.I completed my matriculation and intermediate studies from this place. The school has a well-rounded curriculum that challenged me to grow and learn throughout my time there. In addition to academics, the school offered a variety of extracurricular activities, clubs, and sports that allowed me to explore my interests and develop my talents. The community at DPS Patna was welcoming, and I made many friends during my time there. Overall, I am grateful for the education and experiences I received at DPS Patna, which have helped me prepare for my future endeavors.',
        class1: 'nam',
        class2: 'info',
        class3: 'beautify1',
        class4: 'beautify2',


    },
    {
        class: 'COLLEGE',
        image: 'college.png',
        information: 'I am pursuing my undergraduate degree - BTech in Computer Science and Engineering from PES University. Its one of the most renowned colleges for engineering courses and its helping me upgrade my skills and giving me all the opportunities for a better future.Currently I am in 3rd year and my main objective is to attain a position where I can utilize my potential in an effective way and upgrade myself in terms of skills and experience.',
        class1: 'nam',
        class2: 'info',
        class3: 'beautify1',
        class4: 'beautify2',


    },
    {
        class: 'SKILLS',
        image: 'skills.png',
        information: 'My technological skills include C/C++ , this language is used by me for all DSA and competitive coding practice, I also work with MERN stack in which i have done some minor college projects but my main area of focus is frontend development using React Js(JavaScript) and HTML and SCSS/CSS.I also have implementing knowledge for simple IoT applications.Besides , I have good presentation, problem solving and time management skills including strong work ethics.',
        class1: 'nam',
        class2: 'info',
        class3: 'beautify1',
        class4: 'beautify2',

    },
    {
        class: 'INTERESTS',
        image: 'interests.png',
        information: 'Apart from my love of technologies, in my free time i do art and craft work, read novels and watch movies. I have learnt many forms of classical dance forms like bharatnatyam , odisi and lavani etc and western dance forms as well. I am also a very enthusiastic chess player.Beside all this , I want to travel to new places and explore the world someday. ',
        class1: 'nam',
        class2: 'info',
        class3: 'beautify1',
        class4: 'beautify2',

    },
    {
        class: 'INTERNSHIPS',
        image: 'work.png',
        information: 'Creditap Technologies Private Limited is a financial institution managing loans for educational purposes. I will be doing summer internship at this startup for the duration of 2 months in the summer of 2023.I will be working on web development and will be guided by mentors throughout the process. Hoping to have lots of fun and learn as much as possible.',
        class1: 'nam',
        class2: 'info',
        class3: 'beautify1',
        class4: 'beautify2',

    }
]
function About() {
    return (
        <div className="about_container">

            {info.map((items) => {
                return (
                    <div className={items.class}>
                        <div className={items.class1}>
                            {items.class}
                        </div>

                        <div className={items.class2}>
                            <div className={items.class3}>
                                <img className="pic" src={items.image} />
                            </div>
                            <div className={items.class4}>
                                {items.information}
                            </div>
                        </div>

                    </div>
                )
            }
            )}
        </div>
    );
}
export default About;