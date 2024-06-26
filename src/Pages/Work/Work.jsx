import "./Work.css";

const Work = () => {
  return (
    <div className="timeline-container" id="timeline-contain">
      <div className="timeline">
        <div className="line"></div>
        <span className="timeline-circle circle-one" id="c-one"></span>
        <div className="line"></div>
        <span className="timeline-circle circle-two"></span>
        <div className="line"></div>
        <span className="timeline-circle circle-three"></span>
        <div className="line"></div>
        <span className="timeline-circle circle-four"></span>
        <div className="line"></div>
        <span className="timeline-circle circle-five"></span>
        <div className="line"></div>
        {/* <span className="timeline-circle circle-six"></span> */}
        {/* <div className="line"></div> */}

        <div className="cards-container">
        
            {/* <div className="timeline-card-1 timeline-card" id="time-1">
            <div className="timeline-card-content try">
                <div className="timeline-card-1-front timeline-card-common timeline-card-front-common">
                <svg
                    className="wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                    fill="lightcoral"
                    d="M0,256L24,234.7C48,213,96,171,144,165.3C192,160,240,192,288,224C336,256,384,288,432,282.7C480,277,528,235,576,202.7C624,171,672,149,720,144C768,139,816,149,864,165.3C912,181,960,203,1008,186.7C1056,171,1104,117,1152,112C1200,107,1248,149,1296,170.7C1344,192,1392,192,1416,192L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                    ></path>
                </svg>
                <h3>The Links Guy</h3>
                <span>Email Outreacher</span>
                </div>
                <div className="timeline-card-1-back timeline-card-common timeline-card-back-common">
                <h4 style={{color: "lightcoral"}}>June - July</h4>
                <span>2023</span>
                </div>
            </div>
            </div> */}

            <div className="timeline-card-1 timeline-card">
            <div className="timeline-card-content">
                <div className="timeline-card-1-front timeline-card-common timeline-card-front-common">
                <svg
                    className="wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                    fill="lightcoral"
                    d="M0,256L24,234.7C48,213,96,171,144,165.3C192,160,240,192,288,224C336,256,384,288,432,282.7C480,277,528,235,576,202.7C624,171,672,149,720,144C768,139,816,149,864,165.3C912,181,960,203,1008,186.7C1056,171,1104,117,1152,112C1200,107,1248,149,1296,170.7C1344,192,1392,192,1416,192L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                    ></path>
                </svg>
                <h3 style={{color: "lightcoral"}}>The Pencil Box</h3>
                <span>Spanish Trainer</span>
                </div>
                <div className="timeline-card-1-back timeline-card-common timeline-card-back-common">
                <h4 style={{color: "lightcoral"}}>January - March</h4>
                <span>2022 - 23</span>
                </div>
            </div>
            </div>

            <div className="timeline-card-2 timeline-card">
            <div className="timeline-card-content">
                <div className="timeline-card-2-front timeline-card-common timeline-card-front-common">
                <svg
                    className="wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                    fill="lightgreen"
                    d="M0,256L24,234.7C48,213,96,171,144,165.3C192,160,240,192,288,224C336,256,384,288,432,282.7C480,277,528,235,576,202.7C624,171,672,149,720,144C768,139,816,149,864,165.3C912,181,960,203,1008,186.7C1056,171,1104,117,1152,112C1200,107,1248,149,1296,170.7C1344,192,1392,192,1416,192L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                    ></path>
                </svg>
                <h3 style={{ color: "lightgreen" }}>Sitel pvt ltd</h3>
                {/* <span>Spanish customer service professional</span> */}
                <span>Spanish CSP</span>
                </div>
                <div className="timeline-card-2-back timeline-card-common timeline-card-back-common">
                <h4 style={{ color: "lightgreen" }}>June - September</h4>
                <span>2023</span>
                </div>
            </div>
            </div>

            <div className="timeline-card-3 timeline-card">
            <div className="timeline-card-content">
                <div className="timeline-card-3-front timeline-card-common timeline-card-front-common">
                <svg
                    className="wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                    fill="lightskyblue"
                    d="M0,256L24,234.7C48,213,96,171,144,165.3C192,160,240,192,288,224C336,256,384,288,432,282.7C480,277,528,235,576,202.7C624,171,672,149,720,144C768,139,816,149,864,165.3C912,181,960,203,1008,186.7C1056,171,1104,117,1152,112C1200,107,1248,149,1296,170.7C1344,192,1392,192,1416,192L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                    ></path>
                </svg>
                <h3 style={{ color: "lightskyblue" }}>Go4Guru</h3>
                <span>Spanish Trainer</span>
                </div>
                <div className="timeline-card-4=3-back timeline-card-common timeline-card-back-common">
                <h4 style={{ color: "lightskyblue" }}>November - Present</h4>
                <span>2023</span>
                </div>
            </div>
            </div>

            <div className="timeline-card-4 timeline-card">
            <div className="timeline-card-content">
                <div className="timeline-card-4-front timeline-card-common timeline-card-front-common">
                <svg
                    className="wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                    fill="rgba(212, 91, 236, 0.548"
                    d="M0,256L24,234.7C48,213,96,171,144,165.3C192,160,240,192,288,224C336,256,384,288,432,282.7C480,277,528,235,576,202.7C624,171,672,149,720,144C768,139,816,149,864,165.3C912,181,960,203,1008,186.7C1056,171,1104,117,1152,112C1200,107,1248,149,1296,170.7C1344,192,1392,192,1416,192L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                    ></path>
                </svg>
                <h3 style={{ color: "rgba(212, 91, 236, 0.548" }}>Amigable Institute</h3>
                <span>Spanish Trainer</span>
                </div>
                <div className="timeline-card-4-back timeline-card-common timeline-card-back-common">
                <h4 style={{ color: "rgba(212, 91, 236, 0.548" }}>March - Present</h4>
                <span>2024</span>
                </div>
            </div>
            </div>

            <div className="timeline-card-5 timeline-card">
            <div className="timeline-card-content">
                <div className="timeline-card-5-front timeline-card-common timeline-card-front-common">
                <svg
                    className="wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                    fill="#0099ff"
                    //   fill-opacity="1"
                    d="M0,256L24,234.7C48,213,96,171,144,165.3C192,160,240,192,288,224C336,256,384,288,432,282.7C480,277,528,235,576,202.7C624,171,672,149,720,144C768,139,816,149,864,165.3C912,181,960,203,1008,186.7C1056,171,1104,117,1152,112C1200,107,1248,149,1296,170.7C1344,192,1392,192,1416,192L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                    ></path>
                </svg>
                <h3 style={{ color: "#0099ff" }}>Instrucko</h3>
                <span>Spanish Trainer</span>
                </div>
                <div className="timeline-card-5-back timeline-card-common timeline-card-back-common">
                <h4 style={{ color: "#0099ff" }}>May - Present</h4>
                <span>2024</span>
                </div>
            </div>
            </div>

            

        </div>


      </div>
    </div>
  );
};

export default Work;
