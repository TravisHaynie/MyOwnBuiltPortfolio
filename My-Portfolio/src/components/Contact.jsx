export default function Contact() {
    return(
        <div id="contact" className="contact-container">
          <h2 className="contact-name">Contact</h2>  
          <p className="contact-p1">If you'd like to reach out, feel free to Email me:</p>
          <div className="links-container">
            <a href="mailto:travihay@gmail.com" className="contact-link" target="_blank">travihay@gmail.com</a>
            <a href="./public/Temp-Cloud_resume.pdf" className="contact-link" target="_blank">Cloud Resume</a>
            <a href="./public/Front-End-Resume.pdf" className="contact-link" target="_blank">Front-End Resume</a>
          </div>
          <p className="contact-p2">Based in Portland,OR, but open to remote roles</p>
        </div>
    )
}