import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { RxDropdownMenu } from "react-icons/rx";
import { Context } from '../../Context/Context';
 


const Main = () => {

  const { send, recentPrompt, show, loading, result, setInput, input } = useContext(Context)  // accessing prompts

  


  return (
    <div className='main'>

      <div className="nav">
        <div className="gem">
          <p  >Gemini</p>
              

            {/* </select> */}
          <img src={assets.gemini_icon}></img>
        </div>
        <div className='manas'>
          <button> <img src={assets.gemini_icon}/> Try Gemini Advanced</button>
          <img src={assets.manas} />
        </div>
      </div>

      {/* {loading?} */}
      <div className="container">


        {!show ?   // checking if not showing then greet and card will show up 
          <>
            <div className="greet">
              <p><span>Hello, Manas</span></p>
              <p>How can I help you today?</p>
            </div>

            <div  className="cards">
              <div  className="card">
                <p >Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} />
              </div>

              <div className="card">
                <p>Help me get organized with a list of 10 tips</p>
                <img src={assets.bulb_icon} />
              </div>

              <div className="card">
                <p>Come up with a recipe for an upcoming event</p>
                <img src={assets.message_icon} />
              </div>

              <div className="card">
                <p>Look up a Linux shell command for a specific task</p>
                <img src={assets.code_icon} />
              </div>
            </div>

          </> :  // otherwise result data will show up...............................................
          <div className='resultt'>
            <div className="result-title">
              <img src={assets.manas} />
              <p>{recentPrompt}</p>

            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} />


              {loading ?  // checking loading 
                <div className='loader'> 
                <hr/>
                <hr/>
                <hr/>
                </div>

                : <p dangerouslySetInnerHTML={{ __html: result }} ></p>  // otherwise show the result 
              }
            </div>
          </div>}

        <div className="main-bottom">
          <div className="search">
            <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter To Search' />

            <div className='imgg'>
              <img  src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
                     {/*onclick send function from context.jsx */}
              {input?<img onClick={() => send()} src={assets.send_icon} alt="" /> :null }   
            </div>
          </div>

          <p className='footer'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps </p>
        </div>



      </div>


    </div>
  )
}
{/* <script src="Mode.js" ></script> */}

export default Main
