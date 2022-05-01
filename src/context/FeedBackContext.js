import { createContext, useEffect, useState } from "react";
const FeedBackContext = createContext();


export const FeedBackProvider = ({children}) => {
    const [isLoading, setisLoading] = useState(true)
    const [feedback, setfeedback] = useState([])
    const [feedbackEdit, setfeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        FetchFeedback()
    }, [])

    // Fetch Feedback
    const FetchFeedback = async () => {
         const response = await fetch('/feedback?_sort=id&_order=desc')
         const data = await response.json()
         setfeedback(data)
         setisLoading(false)
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback?_sort=id&_order=desc',{
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()
        setfeedback([data,...feedback])
    }

    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete?')){
          await fetch(`/feedback/${id}`, {method: 'DELETE'})
          setfeedback(feedback.filter((item)=>item.id !== id))
        }
    } 

    const editFeedback = (item) => {
        setfeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updItem)
        })

        const data = await response.json()
        setfeedback(feedback.map((item)=> (item.id === id ? {id: item.id ,...data} : item)))
    }

    return <FeedBackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedBackContext.Provider>
}


export default FeedBackContext