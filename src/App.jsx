import ContainerSettings from "./components/ContainerSettings";
import RouterTime from "./components/RouterTime";
import { TimeProvider } from "./context/TimeContext";

function App() {
  return (
    <>
      <h1 className="title">pomodoro</h1>
      <TimeProvider>
        <RouterTime />
        <ContainerSettings />
      </TimeProvider>
    </>
  );
}

export default App;
