'use client'

import { useState } from "react"

export default function Contact () {
  const [email, setEmail] = useState('');
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify( {email} ),
      headers: {
        'Content-Type': 'application/json', //те що йде на бек-енд
        'Accept': 'application/json', // те що йде з бек-енду 
      }
    })

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          required 
          type="email" 
          onChange={ (event) => setEmail(event.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}