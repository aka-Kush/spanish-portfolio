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
        <span className="timeline-circle circle-six"></span>
        <div className="line"></div>

        <div className="cards-container">
        
            <div className="timeline-card-1 timeline-card" id="time-1">
            <div className="timeline-card-content try">
                <div className="timeline-card-1-front timeline-card-common timeline-card-front-common">
                {/* <div className="wave-div"> */}
                <svg
                    className="wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                    fill="lightcoral"
                    //   fill-opacity="1"
                    d="M0,256L24,234.7C48,213,96,171,144,165.3C192,160,240,192,288,224C336,256,384,288,432,282.7C480,277,528,235,576,202.7C624,171,672,149,720,144C768,139,816,149,864,165.3C912,181,960,203,1008,186.7C1056,171,1104,117,1152,112C1200,107,1248,149,1296,170.7C1344,192,1392,192,1416,192L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                    ></path>
                </svg>
                {/* <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L24,122.7C48,117,96,107,144,117.3C192,128,240,160,288,154.7C336,149,384,107,432,106.7C480,107,528,149,576,165.3C624,181,672,171,720,186.7C768,203,816,245,864,245.3C912,245,960,203,1008,208C1056,213,1104,267,1152,240C1200,213,1248,107,1296,74.7C1344,43,1392,85,1416,106.7L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg> */}
                {/* </div> */}
                <h3>June - July</h3>
                <span>2023</span>
                </div>
                <div className="timeline-card-1-back timeline-card-common timeline-card-back-common">
                <h4 style={{ color: "lightcoral" }}>The Links Guy</h4>
                <span>Email Outreacher</span>
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
                    //   fill-opacity="1"
                    d="M0,256L24,234.7C48,213,96,171,144,165.3C192,160,240,192,288,224C336,256,384,288,432,282.7C480,277,528,235,576,202.7C624,171,672,149,720,144C768,139,816,149,864,165.3C912,181,960,203,1008,186.7C1056,171,1104,117,1152,112C1200,107,1248,149,1296,170.7C1344,192,1392,192,1416,192L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                    ></path>
                </svg>
                <h3>January - March</h3>
                <span>2022 - 23</span>
                </div>
                <div className="timeline-card-2-back timeline-card-common timeline-card-back-common">
                <h4 style={{ color: "lightgreen" }}>Instrucko</h4>
                <span>Spanish Trainer</span>
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
                    fill="lightpink"
                    //   fill-opacity="1"
                    d="M0,256L24,234.7C48,213,96,171,144,165.3C192,160,240,192,288,224C336,256,384,288,432,282.7C480,277,528,235,576,202.7C624,171,672,149,720,144C768,139,816,149,864,165.3C912,181,960,203,1008,186.7C1056,171,1104,117,1152,112C1200,107,1248,149,1296,170.7C1344,192,1392,192,1416,192L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                    ></path>
                </svg>
                <h3>June - September</h3>
                <span>2023</span>
                </div>
                <div className="timeline-card-3-back timeline-card-common timeline-card-back-common">
                <h4 style={{ color: "lightpink" }}>Sitel pvt ltd</h4>
                <span>Spanish customer service professional</span>
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
                    fill="lightskyblue"
                    //   fill-opacity="1"
                    d="M0,256L24,234.7C48,213,96,171,144,165.3C192,160,240,192,288,224C336,256,384,288,432,282.7C480,277,528,235,576,202.7C624,171,672,149,720,144C768,139,816,149,864,165.3C912,181,960,203,1008,186.7C1056,171,1104,117,1152,112C1200,107,1248,149,1296,170.7C1344,192,1392,192,1416,192L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                    ></path>
                </svg>

                <h3>November - Present</h3>
                <span>2023</span>
                </div>
                <div className="timeline-card-4-back timeline-card-common timeline-card-back-common">
                <h4 style={{ color: "lightskyblue" }}>Go4Guru</h4>
                <span>Spanish Trainer</span>
                </div>
            </div>
            </div>

            <div className="timeline-card-6 timeline-card">
            <div className="timeline-card-content">
                <div className="timeline-card-6-front timeline-card-common timeline-card-front-common">
                <svg
                    className="wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                    fill="rgba(212, 91, 236, 0.548)"
                    //   fill-opacity="1"
                    d="M0,256L24,234.7C48,213,96,171,144,165.3C192,160,240,192,288,224C336,256,384,288,432,282.7C480,277,528,235,576,202.7C624,171,672,149,720,144C768,139,816,149,864,165.3C912,181,960,203,1008,186.7C1056,171,1104,117,1152,112C1200,107,1248,149,1296,170.7C1344,192,1392,192,1416,192L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                    ></path>
                </svg>
                <h3>May - Present</h3>
                <span>2024</span>
                </div>
                <div className="timeline-card-6-back timeline-card-common timeline-card-back-common">
                <h4 style={{ color: "rgba(212, 91, 236, 0.548)" }}>Instrucko</h4>
                <span>Spanish Trainer</span>
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

                <h3>March - Present</h3>
                <span>2024</span>
                </div>
                <div className="timeline-card-5-back timeline-card-common timeline-card-back-common">
                <h4 style={{ color: "#0099ff" }}>Amigable Institute</h4>
                <span>Spanish Trainer</span>
                </div>
            </div>
            </div>

        </div>


      </div>
    </div>
  );
};

export default Work;
