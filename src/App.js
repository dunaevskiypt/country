import Header from "./components/Header/Header";
import Main from "./components/Main";
import Controls from "./components/UI/Controls";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Main>
          <Controls />
        </Main>
      </>
    </div>
  );
}

export default App;
