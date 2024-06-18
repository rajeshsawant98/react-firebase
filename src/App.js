import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [eventList, setEventList] = useState([]);

  const eventCollectionRef = collection(db, "events");

  useEffect(() => {
    const getEventList = async () => {
      try {
        const data = await getDocs(eventCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setEventList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getEventList();
  } , []);

   return (
    <div className="App">
      <Auth />

      <div>
        {eventList.map((eventItem) => { 
          return <div key={eventItem.id}>
            <h1 style={{color : eventItem.online ? "blue" : "green"}}> {eventItem.name} </h1>
            <p> No. of attendees: {eventItem.noOfAttendees}</p>

          </div>
        } )}
      </div>
    </div>
  );
}

export default App;
