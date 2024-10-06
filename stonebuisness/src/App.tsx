import "./App.css";
import { Hero } from "./components/Home/Hero";
import { Sustain } from "./components/Home/Sustain";
import { WorldRenowned } from "./components/Home/WorldRenowned";

export default function App() {
  return (
    <div>
      <Hero />
      <WorldRenowned />
      <Sustain />
    </div>
  );
}
