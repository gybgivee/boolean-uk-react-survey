import { InputForm } from "./InputForm.component"

export const RadioList = (props) => {
    const colorPoints = {
        one:1,
        two:2,
        three:3,
        four:4
    }
    
    return (
        <ul>
            {
                Object.keys(colorPoints).map(key=>{
                    const id = `color-${key}`;
                    const value = colorPoints[key];
                    return (
                        <li key={id}>
                            <InputForm 
                            props={props.props}
                            label={value} 
                            targetFor={id}
                            id={id} type="radio" name="colour" value={value}
                            />
                        </li>
                    )
                })
            }
          
        </ul>

    )
}