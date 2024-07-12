import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import { assets } from "../../assets/assets"
import { Context } from '../../Context/Context'

// import {prompt}  from '../../Context/Context'

const Sidebar = () => {

    const [extend, setExtend] = useState(false)
    const { send, newChat, previousPrompt, setRecentPrompt } = useContext(Context)

    const loadPrompt = async (prompt) => {   // for sidebar history to search
        setRecentPrompt(prompt)
        await send(prompt)
    }

    return (
        <div className='sidebar'>
            <div className="top">

                {<img onClick={() => setExtend(prev => !prev)} className='menu' src={assets.menu_icon} />   /* use button to sidebar */}

                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} />
                    {extend ? <p>New Chat</p> : null}
                </div>

                {extend ?
                    <div className="recent">
                        <p className='recent-title'>Recent</p>
                        {previousPrompt.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} />
                                    <p>{item.slice(0, 18)} ...</p>

                                </div>

                            )
                        })}

                    </div> : null}



            </div>

            <div className="bottom">

                <a href="https://gemini.google.com/app"> <div className="bottom-item recent-entry">
                    <img onClick={() => setExtend(prev => !prev)} src={assets.bulb_icon} />
                    {extend ? <p className='google'>Your Gemini</p> : null}
                </div> </a>
                <a href="https://gemini.google.com/faq">
                <div className="bottom-item recent-entry">
                    <img className='help' onClick={() => setExtend(prev => !prev)} src={assets.question_icon} />
                    {extend ? <p>Help</p> : null}
                </div>

                </a>
                


                <div className="bottom-item recent-entry">
                    <img onClick={() => setExtend(prev => !prev)} src={assets.history_icon} />
                    {extend ? <p>History</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img onClick={() => setExtend(prev => !prev)} src={assets.setting_icon} />
                    {extend ? <p>Setting</p> : null}
                </div>



            </div>

        </div>
    )
}

export default Sidebar
