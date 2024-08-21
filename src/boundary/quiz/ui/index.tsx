"use client";

import { Box } from "@/styled-system/jsx";
import { useState } from "react";
import * as styles from "./styles";

export default function Quiz() {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([]);

  const handleOnClick = async () => {
    const resp = await fetch("/api");
    const { question, choices } = await resp.json();

    setQuestion(question);
    setChoices(choices);
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
          {choices.map(choice => (
            <li key={choice}>
              <button className={styles.choice} type="button">
                {choice}
              </button>
            </li>
          ))}
        </ol>
      </Box>
    </>
  );
}
