export default function AnswersItem(props) {
  const { username, colour, spending, about } = props.answerItem;
  return (
    <li>
      <article className="answer">
        <h3>{username ? username : "Anonymous"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ul>
            {spending.map((element, index) => {
              return(
                <li key={index}>{element}</li>
              )

            })}
          </ul>
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{about}</span>
        </p>
      </article>
    </li>
  );
}
