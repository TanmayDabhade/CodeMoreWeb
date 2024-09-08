import React, { useState } from 'react';

const GoogleForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(process.env.GOOGLE_SCRIPTS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      const result = await response.json();
      if (result.status === 'success') {
        setStatus('Data submitted successfully!');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Error submitting data.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred while submitting data.');
    }
  };

  return (
    <div className='border-4 flex bg-white'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=' border-2'
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default GoogleForm;
