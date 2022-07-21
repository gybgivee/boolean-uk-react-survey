import { InputForm } from "./InputForm.component";

export const CheckBoxesList = (props) => {
  const activities = ["swimming", "bathing", "chatting", `I don't like to
   spend time with it`];
  return (
    <ul>
      {activities.map((element, index) => {
        const label = element.charAt(0).toUpperCase() + element.slice(1);
        return (
          <li key={index}>
            <InputForm
              props={props.props}
              label={label}
              type="checkbox" name="spending" value={element}
            />
          </li>
        )
      })}
    </ul>

  )
}