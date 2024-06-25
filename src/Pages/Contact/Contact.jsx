import './Contact.css'
import Images from "../../Images"

const Contact = () => {
  return (
    <>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="542a6e42-d58a-4610-85ce-0d5f1b56a944"></input>
          <div className='nav-header'>
            <div className="nav-btns"></div>
            <div className="nav-btns"></div>
            <div className="nav-btns"></div>
          </div>
            <div className='header'>
                {/* <h3>Have a query? <br />
                <span>Feel free to contact me!</span></h3> */}
                <img src={Images.contactImg} alt="" />
            </div>
            <div className='input-section'>

            <input name="Name" type="text" placeholder='John Doe' className='name-inp'/>
            <input name="Email" type="email" placeholder='johndoe@gmail.com' className='email-inp'/>
            <textarea name="Message" id="" rows={6} placeholder='Enter query here...' className='text-inp'/>            
            <button type='submit'>Submit</button>
            </div>
        </form>
    </>
  )
}

export default Contact