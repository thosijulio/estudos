import { useState, useEffect } from "react";

import './App.css';
import axios from "axios";

const HOST = process.env.REACT_APP_API_HOST || "localhost";
const PORT = process.env.REACT_APP_API_PORT || 3001;

const getContent = async () => axios
  .get(`http://${HOST}:${PORT}/content`)
    .then(({ data }) => data)
    .catch((err) => console.error(err));

function App() {
  const [content, setContent] = useState([])

  useEffect(()=>{
    if(content?.length === 0 && setContent){
      getContent()
        .then((data) => setContent(data))
    }
  }, [content, setContent])

  return (
    <div className="App">
      <p className="Contrast-text"><b>🐋 Aprendendo Docker-compose!!</b></p>
      {
        content?.length > 0 
        && content.map((item, index)=>(
          <div 
            className="App-messages"
            key={`${Date.now()}${index}`}
          >
            <h1>
              {item.title}
            </h1>
            <p>Aqui!11!</p>
            <p dangerouslySetInnerHTML={{__html: item.message}}></p>
          </div>
        ))
      }        
    </div>
  );
}

export default App;
