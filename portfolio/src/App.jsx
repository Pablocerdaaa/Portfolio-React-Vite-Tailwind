import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import { NavbarSimple } from "./components/Navbar.jsx";
const App = () => {
  return (
    <>
    <NavbarSimple/>
    <h1 className="text-3xl font-bold underline"> Pablo Cerda </h1>

    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Button className="mt-10" href="#login">
        algo
      </Button>
    </div>
    <ButtonGradient/>
    </>
  );
};

export default App
