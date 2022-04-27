import { useContext, useEffect, useState } from "react"
import FeedBackContext from "../context/FeedBackContext"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import Card from "./shared/Card"
function FeedBackForm() {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedBackContext)
    const [text, settext] = useState('')
    const [rating, setrating] = useState(10)
    const [message, setmessage] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
   
    useEffect(() => {
        if(feedbackEdit.edit === true){
            setbtnDisabled(false)
            settext(feedbackEdit.item.text)
            setrating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(e.target.value === ''){
            setbtnDisabled(true)
            setmessage('')
        }else if(e.target.value !== '' && e.target.value.trim().length < 10){
            setmessage('Text must be at least 10 characters')
            setbtnDisabled(true)
        }else{
            setmessage('')
            setbtnDisabled(false)
        }
        settext(e.target.value)
    }

    const HandleFormSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length >= 10){
            const newFeedback = {text, rating}
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedback(newFeedback)
            }
            setbtnDisabled(true)
            settext('')
            setrating(10)
        }

    }

    return (
        <Card>
            <form onSubmit={HandleFormSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect rating={rating} select={(rating)=>{setrating(rating)}} />
                <div className="input-group">
                    <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text  }/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
            </form>
            {message && <div className="message" style={{color: '#ff0000'}}>{message}</div>}
        </Card>
    )
}

export default FeedBackForm
