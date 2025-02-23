import React, { useState } from "react";
import { Button, Input, Table } from "@/components/ui";

const questions = [
  // Здесь должны быть 200 вопросов в формате { id, type, text, options, correct }
];

export default function SafetyQuizApp() {
  const [user, setUser] = useState({ name: "", position: "" });
  const [quiz, setQuiz] = useState(null);
  const [results, setResults] = useState([]);

  const startQuiz = () => {
    const randomQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuiz(randomQuestions);
  };

  const submitQuiz = (answers) => {
    const correctAnswers = answers.filter((a, i) => a === quiz[i].correct).length;
    const passed = correctAnswers >= 8;
    setResults([...results, { ...user, passed }]);
    setQuiz(null);
  };

  return (
    <div className="p-4">
      {!quiz ? (
        <div>
          <Input placeholder="Ф.И.О." onChange={(e) => setUser({ ...user, name: e.target.value })} />
          <Input placeholder="Должность" onChange={(e) => setUser({ ...user, position: e.target.value })} />
          <Button onClick={startQuiz}>Пройти проверку знаний</Button>
        </div>
      ) : (
        <div>
          {/* Здесь будут отображаться вопросы и кнопка отправки ответов */}
          <Button onClick={() => submitQuiz([])}>Отправить</Button>
        </div>
      )}
      <Table>
        <thead>
          <tr>
            <th>Ф.И.О.</th>
            <th>Должность</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i}>
              <td>{r.name}</td>
              <td>{r.position}</td>
              <td>{r.passed ? "Сдано" : "Не сдано"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
