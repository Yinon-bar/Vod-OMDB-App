import Footer from "../Footer/Footer";
import VodInput from "../VodInput/VodInput";
import VodList from "../VodList/VodList";
import VodStripe from "../VodStripe/VodStripe";

function Home() {
  return (
    <div className="Home">
      <VodStripe />
      <VodInput />
      <VodList />
      <Footer />
    </div>
  );
}

export default Home;
