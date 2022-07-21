import { RadioList } from "./RadioList.component"
export const RadioGroup =(props)=>{
    
    return(
        <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioList props={props}/>
    </div>
    )
}