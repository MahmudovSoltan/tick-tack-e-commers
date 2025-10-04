import { ToastContainer } from "react-toastify";
import LandingBody from "./components/landing/LandingBody";
export default function Landing() {
  return (
    <div className="container mx-auto">
      <main>
        <LandingBody />
        <ToastContainer />
      </main>
    </div>
  );
}
