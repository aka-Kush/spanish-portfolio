import "./Home.css"
import Images from "../../Images"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Home = () => {
    
  return (
    <div className="home-container">
      {/* <div className="home-image blur-div"> */}
        <LazyLoadImage 
          src={Images.pfp}
          effect="blur"
          placeholderSrc={Images.pfpBlur}
          className="lazy-image"
        />
      {/* </div> */}
      <div className="about-section">
        <h2 className="hola">Hola!</h2>
        <p className="desc">I'm a multilingual professional with 3 years of experience in teaching Spanish as a foreign language. Having completed a Bachelor's degree in Spanish Honors and being a current pursuant of Masters in Spanish language as a career, I bring a deep understanding of language and culture to the table. Alongside the expertise in teaching, I am highly goal-oriented, demonstrating a knack for efficient communication, and organizing. I believe "Practice is the key to success".</p>
        <div className="links">
          <i className="fa-solid fa-file resume-icon"><a className="resume-link" href="https://app.rezi.ai/s/euj7N1eEdoDoyMZd5p3I" target="_blank ">Resume</a></i>
          <i className="fa-solid fa-envelope contact-icon"><a href="/contact" className="contact-link">Contact</a></i>
        </div>
      </div>
    </div>
  )
}

export default Home