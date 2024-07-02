import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css"

const Slide = () => {

    const data = [
        {
            name: "Gautam Ghanesh",
            company: "Student",
            review: "Ms. Ira is really good at teaching. She helps me whenever I don't understand any words. And also keeps me engaged and ready to learn all throughout the class.",
            color: "red"
        },
        {
            name: "Kavish Chanda",
            company: "Student",
            review: "Ira is an excellent Spanish teacher. She teaches various aspects of the Spanish language exceptionally well. She incorporates a lot of detail into every aspect of Spanish, which facilitates learning the language. Overall, she is a very kind and hardworking teacher",
            color: "red"
        },
        {
            name: "Mansi Karwal",
            company: "Student's Parent",
            review: "Ira has been teaching Spanish to my daughter for a few months now. Her dedication to students is clearly evident in how she manages their learning process and provides ongoing support. My daughter enjoys her teaching style and eagerly anticipates her Spanish class.",
            color: "red"        
        },
    ] 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        // fade: true
        responsive: [
            {
              breakpoint: 1350,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 750,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
        ]
    }

  return (
    <div className='main-container'>
        <div className="inner-container">
        <Slider {...settings}>
        {data.map((d) => (
            <div key={d.name} className='testimonial absolute' style={{backgroundColor: "red"}}>
                <div className='content-person-div' >
                    <h4 className='content-person'>
                        {d.name}
                    </h4>
                    <div className="right-corner">
                    </div>
                    <i className="fa-solid fa-quote-right quote-icon"></i>
                </div>
                <span className='content-desc'>{d.company}</span>
                <p className='content'>{d.review}</p>
            </div>
        ))}
        </Slider>
        </div>
    </div>
  )
}

export default Slide