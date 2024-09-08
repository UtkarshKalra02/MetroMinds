import About from "./Components/About";
import Announcements from "./Components/Announcements";
import CalendarSection from "./Components/Calendar";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Sectors from "./Components/Sectors";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        {/* Full-width image with Announcements section on top */}
        <div className="relative w-full">
          <img
            src="src/assets/Emblem.png"
            alt="Government Building"
            className="w-full h-full object-cover"
          />
          {/* Announcements section positioned on top of the image */}
          <div className="absolute inset-0 flex ml-24 mt-12 shadow-lg">
            <div className="bg-white p-6 rounded-lg w-2/5 h-5/6 border">
              <Announcements />
            </div>
          </div>
        </div>

        {/* About Us section and other content */}
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            <About />
            <CalendarSection />
            <Sectors />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;