import React from "react";
import './styles/Contact.scss';
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
const contacts = [
    {
        class: 'linkedin',
        url: 'https://www.linkedin.com/in/ayushi-soumya-5a5413240/',
        icon: AiFillLinkedin,

    },
    {
        class: 'github',
        url: 'https://github.com/AyushiSoumya',
        icon: AiOutlineGithub,
    },
    {
        class: 'leetcode',
        url: 'https://leetcode.com/Ayushi_Soumya/',
        icon: SiLeetcode,

    }
]

function Contact() {
    return (
        <div className="contact_container">
            <div className="contact_">
                <br />
                Phone Number: (+91) 8102986784
                <br />
                Email ID: soumya.ayushi@gmail.con
            </div>
            {contacts.map((items) => {
                return (
                    <div className={items.class}>
                        <a href={items.url}><items.icon size="50%" title={items.class} /></a>

                    </div>
                )
            })}
        </div>
    );
}
export default Contact;