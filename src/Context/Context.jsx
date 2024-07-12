import { createContext, useState } from "react";
import run from "../API/gemini";

export const Context = createContext();   // use createcontext

const ContextProvider = (props) =>{  // props pass

    const[input , setInput ]= useState("")  // save the input data
    const[recentPrompt , setRecentPrompt]= useState("")   // display input in Main 
    const[previousPrompt , setPreviousPrompt ]= useState([])   // display data in sidebar
    const[ show , setShow ]= useState(false)  // if it is true , it will hide greet and card and display The result
    const[loading , setLoading ]= useState(false)  // if it is true , it will show the loading animation
    const[result , setResult ]= useState("")  // it will give the result on webPage
    
    // ..................................................................Typing effect
     const delay = (index , nextWord)=>{

        setTimeout(function(){
            setResult(previous=>previous+nextWord)   // typing effect

        },60*index)

     }
     //................................................................................
    
     const newChat =()=>{
        setLoading(false)
        setShow(false)
     }




    const send = async (prompt)=>{    //prompt pass

        setResult("")   // previous result reset
        setLoading(true)  // loading starts
        setShow(true)  // result show true 

        let response;  // sidebar history search

        if(prompt !== undefined){
            response = await run(prompt)
            setRecentPrompt(prompt) 
        }
        else{
            setPreviousPrompt(previous=>[...previous,input])   // input ko sidebar me store krya
            setRecentPrompt(input)
             response = await run(input) 
        }
      
         
        // ................................................................................................ star sbko edit krne ke liye 
        
        let responseArray = response.split("**");  // ** ko convert kiya bold me 
        let newResponse ="" ;
        for(let i=0 ; i< responseArray.length; i++){
            if(i === 0|| i%2 !==1 ){
                newResponse +=  responseArray[i]
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>" 
            }
        }

        let newResponse2 = newResponse.split("*").join("</br>")   // * ko replace kiya next line se 


        // .............................................................................................  typing effect ke liye

        let newResponseArray = newResponse2.split(" ");    // typing effect ke liye h yeh 
         for (let i=0; i<newResponseArray.length ; i++ ){
            const nextWord =  newResponseArray[i];
            delay(i,nextWord+" ")
         }
        setResult(newResponse2)  // result will show from the response
        // ........................................................................................................

        setLoading(false)  // loading will not happen after getting result
        setInput("")  // input will clean after executing 




    }
     // question to ask
     
    const contextValuee= {   

     // passing values to different files to access and work
        send,
        previousPrompt,
        setPreviousPrompt,
        recentPrompt,
        setRecentPrompt,
        show,
        loading,
        result,
        input,
        setInput,
        newChat
        
        


    }

    return <Context.Provider  value={contextValuee}> 
        {props.children}
    </Context.Provider>

}

export default ContextProvider