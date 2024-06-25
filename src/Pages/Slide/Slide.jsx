import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css"

const Slide = () => {

    const data = [
        {
            name: "Ritika Kush",
            company: "Amex",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora maiores officia veniam doloribus dicta laudantium alias sapiente! Ex, saepe! Accusamus, exercitationem unde? Ipsam, inventore ex. Laborum sequi fuga corrupti delectus architecto accusantium, asperiores atque eaque est accusamus, modi labore vitae reiciendis, molestiae autem veritatis qui eligendi mollitia earum doloribus veniam!",
            color: "red"
        },
        {
            name: "Shivansh Kush",
            company: "TCS",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora maiores officia veniam doloribus dicta laudantium alias sapiente! Ex, saepe! Accusamus, exercitationem unde? Ipsam, inventore ex. Laborum sequi fuga corrupti delectus architecto accusantium, asperiores atque eaque est accusamus, modi labore vitae reiciendis, molestiae autem veritatis qui eligendi mollitia earum doloribus veniam!",
            color: "red"
        },
        {
            name: "Eminem",
            company: "Hip Hop",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora maiores officia veniam doloribus dicta laudantium alias sapiente! Ex, saepe! Accusamus, exercitationem unde? Ipsam, inventore ex. Laborum sequi fuga corrupti delectus architecto accusantium, asperiores atque eaque est accusamus, modi labore vitae reiciendis, molestiae autem veritatis qui eligendi mollitia earum doloribus veniam!",
            color: "red"
        },
        {
            name: "Doja Cat",
            company: "Meow",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora maiores officia veniam doloribus dicta laudantium alias sapiente! Ex, saepe! Accusamus, exercitationem unde? Ipsam, inventore ex. Laborum sequi fuga corrupti delectus architecto accusantium, asperiores atque eaque est accusamus, modi labore vitae reiciendis, molestiae autem veritatis qui eligendi mollitia earum doloribus veniam!",
            color: "red"        },
        {
            name: "Natasha",
            company: "Amazon",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora maiores officia veniam doloribus dicta laudantium alias sapiente! Ex, saepe! Accusamus, exercitationem unde? Ipsam, inventore ex. Laborum sequi fuga corrupti delectus architecto accusantium, asperiores atque eaque est accusamus, modi labore vitae reiciendis, molestiae autem veritatis qui eligendi mollitia earum doloribus veniam!",
            color: "red"        },
        {
            name: "Kirmada",
            company: "Imagine LTD",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora maiores officia veniam doloribus dicta laudantium alias sapiente! Ex, saepe! Accusamus, exercitationem unde? Ipsam, inventore ex. Laborum sequi fuga corrupti delectus architecto accusantium, asperiores atque eaque est accusamus, modi labore vitae reiciendis, molestiae autem veritatis qui eligendi mollitia earum doloribus veniam!",
            color: "red"        },
        {
            name: "Chota Bheem",
            company: "Dholakpur",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora maiores officia veniam doloribus dicta laudantium alias sapiente! Ex, saepe! Accusamus, exercitationem unde? Ipsam, inventore ex. Laborum sequi fuga corrupti delectus architecto accusantium, asperiores atque eaque est accusamus, modi labore vitae reiciendis, molestiae autem veritatis qui eligendi mollitia earum doloribus veniam!",
            color: "red"        }
    ] 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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