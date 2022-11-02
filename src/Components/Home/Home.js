import Footer from "../Footer/Footer";
import VodInput from "../VodInput/VodInput";
import VodList from "../VodList/VodList";
import VodStripe from "../VodStripe/VodStripe";
import { useEffect, useState } from "react";

function Home() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    doApi("titanic");
  }, []);
  const doApi = async (URL) => {
    let myUrl = `https://www.omdbapi.com/?s=${URL}&apikey=98a1ad13`;
    let resp = await fetch(myUrl);
    let data = await resp.json();
    console.log(data);
    setArr(data.Search);
  };

  return (
    <div className="Home">
      <VodStripe />
      <VodInput />
      <VodList vod_ar={arr} />
      <Footer />
    </div>
  );
}

export default Home;
