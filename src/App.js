import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
const [API, setAPI] = useState(data);
  return <>
  <div className="container">
    <h3>Questions and Answers about login</h3>
    <section className="info">
      {API.map((question) => {
        return <SingleQuestion key={question.id} {...question}/>
      })}
    </section>
  </div>
  </>
}

export default App;
