import { useContext } from "react";
import { SuggestionContext } from "../context/SuggestionContext";

export default function SearchSuggestion({ data, setInput }) {
  const [isSuggestionOpen, setIsSuggestionOpen] = useContext(SuggestionContext);
  return (
    <div
      className="m-1 font-bold rounded-xl cursor-pointer border-b-gray-300"
      onClick={(e) => {
        e.stopPropagation(),
          setInput(e.target.innerText),
          setIsSuggestionOpen(false);
      }}
    >
      {data.title}
    </div>
  );
}
