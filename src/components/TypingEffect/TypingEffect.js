import React from "react";
import Typical from "react-typical";

export default function TypingEffect({ word }) {
  return (
    <Typical
      className="text-type"
      loop={Infinity}
      wrapper="b"
      steps={[
        "Visual Design",
        3000,
        "Media Production",
        3000,
        "Typography",
        3000,
        "Storytelling",
        3000,
        "Infographics Design",
        3000,
      ]}
    />
  );
}
