import { CheckBoxesGroup } from "./CheckboxesGroup.component"
import { FormGroup } from "./FormGroup.component"
import { RadioGroup } from "./RadioGroup.component"
import { useState } from "react";
export const Survey = (props) => {
    const initialSurvey = {
        colour: 0,
        spending: [],
        about: "",
        username: "",
        email: ""
      }
    const {userDetails, setUserDetails} = props;
    const {updateUsers} = props;
    
    const handleSubmit = (e) => {
    e.preventDefault();
     setUserDetails(userDetails);
     updateUsers(userDetails);
     setUserDetails(initialSurvey);
    
    };

    const handleChange = (event) => {
        console.log('call handlechange');
        let { name, value } = event.target;
        let activities=userDetails["spending"];
        if(name==="spending"){
          activities.push(value);
          console.log('activities',activities);
         value = activities;
        }
      
        setUserDetails({ ...userDetails, [name]: value })
       
        console.log('setUserDetails Survey',userDetails);
    }
  
    return (
        <form className="form" onSubmit={(e)=>{handleSubmit(e)}}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <RadioGroup userDetails={userDetails} handleChange={handleChange} />
            <CheckBoxesGroup userDetails={userDetails} handleChange={handleChange}/>
            <FormGroup userDetails={userDetails} handleChange={handleChange}/>
        </form>

    )
}