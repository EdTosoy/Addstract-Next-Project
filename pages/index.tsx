import { AppProvider } from "../ContextAPI/appContext";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
}
