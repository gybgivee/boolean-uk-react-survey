import AnswersItem from "./AnswersItem";

export default function AnswersList({users}) {
  console.log('users In answer',users);
  return (
    <ul>
      {users.map((element, index) => (
        <AnswersItem 
        key={index} 
        answerItem={element}/>
      ))}
    </ul>
  );
}
