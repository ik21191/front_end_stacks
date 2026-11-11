import { useState } from 'react'
import './App.css'

function Simple() {
  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState('')

  return (

    <>
      <section id="center">

        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code><br />
            <b>HMR</b> : Meaning any changes you save in your code editor will instantly update in your browser without requiring a manual refresh.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <button
          type="button"
          className="counter"
          onClick={() => setFirstName('John')}
        >
          Click to get my Name: <b>{firstName}</b>
        </button>
      </section>

    </>
  )
}

export default Simple
