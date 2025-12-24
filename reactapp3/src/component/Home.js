import React from 'react'

function Home() {
  const number = 5;
  const name = "jonh jude";
  const date =  new Date().toLocaleDateString();
  const time = date;

  function Card(props){
    return(
     <div className='card'>
      <p className='titleText'>The number is: {number}</p>
      <p className='titleDec'>My name is:{name}</p>
      <p className='footer'>{date}</p>
    </div>
    );
  }

  return (
    <div>
<h1 className="headingStyle">Home page</h1> 

<Card />
<Card />
    </div>
  );
}

export default Home;
