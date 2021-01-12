import React, {useEffect, useState} from "react";
import axios from 'axios';
import Photo from './Components/Photo';
import "./App.css";
//api key: uLnr92nfeKnQCdU4M7cEN3cr8THpIhcoYflaE8rl



function App() {
  const [photo, setPhoto] = useState("");
  //grabs the photo of the day and sets it to state...
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=uLnr92nfeKnQCdU4M7cEN3cr8THpIhcoYflaE8rl")
    .then(res => {
      console.log(res, 'response')
      setPhoto(res.data)
    })
    .catch(err => console.log(err))
  }, []);
  return (
    <div className="App">
      <Photo photo={photo} />
    </div>
  );
}

export default App;
