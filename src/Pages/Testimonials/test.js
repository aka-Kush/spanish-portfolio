
.control{
    display: none;
    visibility: hidden;
}

.control i{
    font-size: 20px;
}

.hiddenBtn{
    /* visibility: hidden; */
    color: red;
}

@media screen and (max-width: 500px){
    .main-container{
        display: flex;
        align-items: center;
        overflow: hidden;
        width: 85%;
        position: relative;
    }
    .slide{
        position: absolute;
        width: 100%;
    }
    .control{
        display: flex;
        position: fixed;
        bottom: 2px;
        justify-content: space-between;
        width: 30%;
        margin-bottom: 20px;
        visibility: visible;
        /* left: 50; */
    }
}

@media screen and (max-width: 1000px){
    .main-container{
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
    }
}


<div className="wrapperDiv">

            <div className='div1 testimonial slide'>
                <div className='content-person-div'>
                    <h4 className='content-person'>
                        Ritika Kush
                    </h4>
                    <i className="fa-solid fa-quote-right quote-icon"></i>
                </div>
                <span className='content-desc'>Amex</span>
                <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illum at facilis dicta? Itaque accusamus sed facilis fugiat nemo, laboriosam aliquid unde praesentium exercitationem ullam atque molestiae est reiciendis animi quidem, hic magnam. Cumque atque quia quis pariatur fugiat maxime adipisci ex, amet, deleniti dolores ratione laborum, provident quos quidem?</p>
            </div>
            <div className='div2 testimonial slide'>
            <div className='content-person-div'>
                    <h4 className='content-person'>
                        Ritika Kush
                    </h4>
                    <i className="fa-solid fa-quote-right quote-icon"></i>
                </div>
                <span className='content-desc'>Amex</span>
                <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illum at facilis dicta? Itaque accusamus sed facilis fugiat nemo, laboriosam aliquid unde praesentium exercitationem ullam atque molestiae est reiciendis animi quidem, hic magnam. Cumque atque quia quis pariatur fugiat maxime adipisci ex, amet, deleniti dolores ratione laborum, provident quos quidem?</p>
            </div>
            <div className='div3 testimonial slide'>
            <div className='content-person-div'>
                    <h4 className='content-person'>
                        Ritika Kush
                    </h4>
                    <i className="fa-solid fa-quote-right quote-icon"></i>
                </div>
                <span className='content-desc'>Amex</span>
                <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illum at facilis dicta? Itaque accusamus sed facilis fugiat nemo, laboriosam aliquid unde praesentium exercitationem ullam atque molestiae est reiciendis animi quidem, hic magnam. Cumque atque quia quis pariatur fugiat maxime adipisci ex, amet, deleniti dolores ratione laborum, provident quos quidem?</p>
            </div>
            <div className='div4 testimonial slide'>
            <div className='content-person-div'>
                    <h4 className='content-person'>
                        Ritika Kush
                    </h4>
                    <i className="fa-solid fa-quote-right quote-icon"></i>
                </div>
                <span className='content-desc'>Amex</span>
                <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illum at facilis dicta? Itaque accusamus sed facilis fugiat nemo, laboriosam aliquid unde praesentium exercitationem ullam atque molestiae est reiciendis animi quidem, hic magnam. Cumque atque quia quis pariatur fugiat maxime adipisci ex, amet, deleniti dolores ratione laborum, provident quos quidem?</p>
            </div>
            <div className='div5 testimonial slide'>
            <div className='content-person-div'>
                    <h4 className='content-person'>
                        Ritika Kush
                    </h4>
                    <i className="fa-solid fa-quote-right quote-icon"></i>
                </div>
                <span className='content-desc'>Amex</span>
                <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illum at facilis dicta? Itaque accusamus sed facilis fugiat nemo, laboriosam aliquid unde praesentium exercitationem ullam atque molestiae est reiciendis animi quidem, hic magnam. Cumque atque quia quis pariatur fugiat maxime adipisci ex, amet, deleniti dolores ratione laborum, provident quos quidem?</p>
            </div>
            {/* <div className="control">
                <i className="fa-solid fa-arrow-left left" onClick={prev}></i>
                <span className='counterUpdate'>${counter}</span>
                <i className="fa-solid fa-arrow-right right" onClick={next}></i>
                </div> */}
            </div>