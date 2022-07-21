import { CheckBoxesList } from "./CheckboxList.component"

export const CheckBoxesGroup = (props) => {
    
    return (
        <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <CheckBoxesList props={props}/>
        </div>
    )
}