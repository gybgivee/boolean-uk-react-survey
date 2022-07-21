export const InputForm = ({props,label,targetFor,...theRestFields}) => {
 //console.log('the rest fields :',theRestFields);
  const {userDetails,handleChange} = props;
    return (
        <>
            {label&&(<label htmlFor={targetFor}>{label}</label>)}
            <input {...theRestFields} onChange={(e)=>handleChange(e)}/>
        </>
    )
}