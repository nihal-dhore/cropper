import Logo from "@/components/logo";
import SessionSwitch from "@/components/session-switch";

function App() {
  return (
    <>
      <div className="h-screen w-screen text-white">
        <Logo />
        <SessionSwitch />
      </div>
    </>
  );
}

export default App;
