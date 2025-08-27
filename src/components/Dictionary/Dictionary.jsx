import { useEffect, useState } from "react";
import dictionary from "../../dictionary.json";
import "./dictionary.css";
const Dictionary = () => {
  const [textInput, setTextInput] = useState("");
  const [meaning, setMeaning] = useState(null);
  const searchdict = () => {
    setMeaning("Word not found in the dictionary.");

    dictionary.map((item) => {
      return item.word.toLowerCase() === textInput.toLowerCase()
        ? setMeaning(item.meaning)
        : "";
    });
  };
  useEffect(() => {}, [meaning]);
  return (
    <div>
      <h1>Dictionary</h1>
      <div
        className="text-search"
        style={{ display: "flex", gap: "20px", justifyContent: "center" }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for a word..."
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
          style={{ padding: "10px" }}
        />
        <button
          type="button"
          className="search-btn"
          onClick={() => {
            searchdict();
          }}
        >
          Search
        </button>
      </div>

      <h3>Definition: </h3>
      <p>{meaning}</p>
    </div>
  );
};
export default Dictionary;
