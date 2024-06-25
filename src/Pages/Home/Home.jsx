import "./Home.css"
import Images from "../../Images"

const Home = () => {
  
  return (
    <div className="home-container">
      <div className="home-image">
        <img src={Images.homeImg} alt="Owner image" />
      </div>
      <div className="about-section">
        <h2 className="hola">Hola!</h2>
        <p className="desc">Multilingual professional with expertise in Spanish language. With a Bachelor's degree in Spanish Honors, I bring a deep understanding of language and culture to the table. Alongside exceptional problem-solving skills, I am highly goal-oriented, demonstrating a knack for efficient communication, organizing, and writing.</p>
      </div>
    </div>
  )
}

export default Home