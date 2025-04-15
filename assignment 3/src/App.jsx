import TextUpdater from "./components/TextUpdater";
import TextForm from "./components/TextForm";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="p-4 space-y-4">
      <TextUpdater />
      <TextForm />
      <UserCard name="Pasam Venkat Reddy" 
        email="pasamvenkatreddy2022@vitbhopal.ac.in" />
      <Button />
      <LoginForm />
    </div>
  );
}

export default App;
