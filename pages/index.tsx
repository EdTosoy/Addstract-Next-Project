import { DarkModeProvider } from "../ContextAPI/darkMode";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <DarkModeProvider>
      <HomePage />
    </DarkModeProvider>
  );
}
