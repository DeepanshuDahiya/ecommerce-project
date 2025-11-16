import { createContext, useState } from "react";

export const SuggestionContext = createContext(false);
export default function SuggestionProvider({ children }) {
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
  return (
    <SuggestionContext.Provider value={[isSuggestionOpen, setIsSuggestionOpen]}>
      {children}
    </SuggestionContext.Provider>
  );
}
