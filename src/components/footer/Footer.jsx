/* eslint-disable jsx-a11y/anchor-has-content */
import './footer.css';
import Button from '@mui/material/Button'

const Footer = () => {
    return (
        <section className="container-fluid footer shadow-lg p-4">

            <div className="btn col-md-4 offset-md-4 mx-auto align-content-around d-md-flex justify-content-md-around">
                <Button variant="outlined" color="primary"><a href="#home">Home</a></Button>
                <Button variant="outlined" color="primary"><a href="#skills">Skills</a></Button>
                <Button variant="outlined" color="primary"><a href="#projects">Projects</a></Button>
                <Button variant="outlined" color="primary"><a href="#contact">Contact</a></Button>
            </div>

            <div className="footer-socials-media col-8 mx-auto col-md-3 offset-md-5 fs-1 my-3 mt-md-5 mb-md-3 d-flex justify-content-around">
                <a href="https://www.facebook.com/profile.php?id=100032771520136" className="fa fa-facebook-square" target={"_blank"} rel="noreferrer"></a>
                <a href="https://www.instagram.com/Naqibullah_Nabizada/" className="fa fa-instagram" target={"_blank"} rel="noreferrer"></a>
                <a href="https://twitter.com/naqib_nabizada" className="fa fa-twitter-square" target={"_blank"} rel="noreferrer"></a>
                <a href="https://www.linkedin.com/in/naqibullah-nabizada-34a502243/" className="fa fa-linkedin-square" target={"_blank"} rel="noreferrer"></a>
                <a href="https://github.com/Naqibullah-Nabizada" className="fa fa-github-square" target={"_blank"} rel="noreferrer"></a>
            </div>

            <p className="text-white text-center my-3 p-3">&copy;copy right 2022</p>

        </section>
    )
}

export default Footer;