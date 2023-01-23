import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {

 const questionsToDisplay = questions.map((question) => <QuestionItem
    key={question.id}
    question={question}
    onDeleteQuestion={onDeleteQuestion}
    onUpdateQuestion={onUpdateQuestion}
  />);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToDisplay}</ul>
    </section>
  );
}

export default QuestionList;
