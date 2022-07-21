import { InputForm } from "./InputForm.component"

export const FormGroup = (props) => {
    const {handleChange} = props;
   
    return (
        <>
            <label>{"What else have you got to say about your rubber duck?"}</label>
            <textarea name="about" cols="30" rows="10" onChange={(e)=>handleChange(e)}  value={props.userDetails["about"]}></textarea>

            <InputForm
                props={props}
                label="Put your name here (if you feel like it):"
                type="text" name="username" value={props.userDetails["username"]}
            />
            <InputForm
                props={props}
                label="Leave us your email pretty please??"
                type="email" name="email"  value={props.userDetails["email"]}
            />

            <input className="form__submit" type="submit" value="Submit Survey!" />
        </>
    )
}