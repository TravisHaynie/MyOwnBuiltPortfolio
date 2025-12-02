import CloudResume from "./public/Temp-Cloud_resume.pdf";
import FrontEndResume from "./public/Front-End-Resume.pdf";




export default function Contact() {
    return(
        <div id="contact" className="contact-container">
          <h2 className="contact-name">Contact</h2>  
          <p className="contact-p1">If you'd like to reach out, feel free to Email me:</p>
          <div className="links-container">
            <a href="mailto:travihay@gmail.com" className="contact-link" target="_blank">travihay@gmail.com</a>
            <a href={CloudResume} className="contact-link" target="_blank">Cloud Resume</a>
            <a href={FrontEndResume} className="contact-link" target="_blank">Front-End Resume</a>
          </div>
          <p className="contact-p2">Based in Portland,OR, but open to remote roles</p>
        </div>
    )
}