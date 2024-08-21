"use client";

import { Box } from "@/styled-system/jsx";
import { useState } from "react";
import * as styles from "./styles";

export default function Quiz() {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([]);
  const [correctIndex, setCorrectIndex] = useState(null);

  const handleOnClick = async () => {
    const resp = await fetch("/api");
    const { question, choices, correctIndex } = await resp.json();

    setQuestion(question);
    setChoices(choices);
    setCorrectIndex(correctIndex);
  };

  const handleOnClickChoice = (idx: number) => () => {
    correctIndex === idx ? alert("🎉 Correct!") : alert("Try Again!");
  };

  return (
    <>
      <h1 className={styles.title}>Geogrpahy trivia</h1>
      <button className={styles.button} type="button" onClick={handleOnClick}>
        Ask me a geography question
      </button>
      <Box className={styles.card}>
        <p className={styles.question}>{question}</p>
        <ol className={styles.choices}>
          {choices.map((choice, idx) => (
            <li key={choice}>
              <button className={styles.choice} type="button" onClick={handleOnClickChoice(idx)}>
                {choice}
              </button>
            </li>
          ))}
        </ol>
      </Box>
    </>
  );
}
