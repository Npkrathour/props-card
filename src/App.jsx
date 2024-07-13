import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="bg-black w-full h-screen p-20">
      <h1 className="text-center text-white text-3xl font-medium">Cards</h1>
      <div className="flex justify-center gap-5 pt-4">
        <Card username="Pinku" btnText="More" />
        <Card username="Rathour" btnText="Details" />
        <Card username="David" btnText="Click" />
        <Card username="Rahul" btnText="Details" />
      </div>
    </div>
  );
}

export default App;
