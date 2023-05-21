import { useState } from 'react';

const GoogleAccountCheck = () => {
  const [email, setEmail] = useState('');
  const [isGoogleAccount, setIsGoogleAccount] = useState(false);

  const checkGoogleAccount = async () => {
    const response = await fetch(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=YOUR_API_KEY`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      const isGoogleUser = data.users.length > 0;
      setIsGoogleAccount(isGoogleUser);
    } else {
      setIsGoogleAccount(false);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkGoogleAccount();
  };

  console.log(isGoogleAccount)

  return (
    <div className='mt-32'>
      <h1>Google Account Check</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit">Check</button>
      </form>
      {isGoogleAccount ? (
        <p className="text-green-500">The email belongs to a Google account.</p>
      ) : (
        <p className="text-red-500">The email does not belong to a Google account.</p>
      )}
    </div>
  );
};

export default GoogleAccountCheck;
