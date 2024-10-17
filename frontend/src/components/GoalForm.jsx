import { useState } from "react"
import { useDispatch  } from "react-redux" 
import { useNavigate } from "react-router-dom"
import {createGoal} from '../features/goals/goalSlice'

function GoalForm(){
    const [text, setTxt] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createGoal({text}))
        setTxt('')
    }
    return(
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">Goal</label>
                    <input type="text" name="text" id="text" 
                    value={text} 
                    onChange={(e)=>setTxt(e.target.value)}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-block" 
                    type="submit">
                        Add Goal 
                    </button>
                </div>
            </form>
        </section>
    )
}
export default GoalForm 