import { createContext, useState } from "react";
import FeedbackData from "../data/Feedbackdata";
import { v4 as uuidv4 } from "uuid"

const FeedBackContext = createContext();


export const FeedBackProvider = ({children}) => {
    const [feedback, setfeedback] = useState(FeedbackData)
    const [feedbackEdit, setfeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedback = (newFeedback) => {
        setfeedback((old)=>{
          newFeedback.id = uuidv4()
          return [newFeedback,...old]
        })
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
          setfeedback(feedback.filter((item)=>item.id !== id))
        }
    } 

    const editFeedback = (item) => {
        setfeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        setfeedback(feedback.map((item)=> (item.id === id ? {id: item.id ,...updItem} : item)))
    }

    return <FeedBackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedBackContext.Provider>
}


export default FeedBackContext