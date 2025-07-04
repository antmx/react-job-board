import React from 'react'

const App2 = () => {

  const userName = 'Antony'  
  const x = 10
  const y = 20
  const names = ['Antony', 'John', 'Jane', 'Rod']
  const loggedIn = true
  const styles = {
    color: 'red',
    fontSize: '55px'
  }

  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={{color:'red', fontSize:'24px'}}>Hello {userName}</p>
      <p style={ styles}>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
      {loggedIn && <p>Hello Member</p>}
    </>
  )
}

export default App