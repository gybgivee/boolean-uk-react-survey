import { useEffect, useState } from "react";
import AnswersList from "./AnswersList";
import { Survey } from "./Survey.component";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const initialSurvey = {
    colour: 0,
    spending: [],
    about: "",
    username: "",
    email: "",
  }
 
  const [userDetails, setUserDetails] = useState(initialSurvey);
  const [users, setUsers] = useState([]);
  console.log('userDetails', userDetails);

  const updateUsers = (user) => {
    let updateUsers = [...users];
    updateUsers.push(user);
    setUsers(updateUsers);

  }


  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList users={users} />
      </section>
      <section className="main__form">
        <Survey userDetails={userDetails} setUserDetails={setUserDetails} updateUsers={updateUsers}/>
      </section>
    </main>
  );
}

export default Main;
