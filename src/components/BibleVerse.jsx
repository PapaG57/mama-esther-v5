// src/components/BibleVerse.jsx
import React from "react";
import "./BibleVerse.css";

export default function BibleVerse({ text, reference }) {
  return (
    <blockquote className="bible-verse">
      <p>{text}</p>
      <span className="bible-verse-strong">{reference}</span>
    </blockquote>
  );
}
