import "./index.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import DisplaySection from "./components/DisplaySection";
import { useDashboardStore } from "./Zustand/DashboardStore";

function App() {
  const isToggled = useDashboardStore((state) => state.isToggled);
  return (
    <div className={`block h-screen ${isToggled ? "" : "dark"} `}>
      <Header />
      <Container>
        <DisplaySection />
        <Sidebar />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
