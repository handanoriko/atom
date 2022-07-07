import { PrimaryButton } from "./components/atoms/button/PrimaryButton.jsx";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}
