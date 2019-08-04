import React, {useState} from 'react';

export const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      {showSuccess ? (
        <div>Вы вошли</div>
      ) : (
        <form>
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            data-testid="email-input"
            type="email"
          />
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            data-testid="password-input"
            type="password"
          />
          <button onClick={() => setShowSuccess(true)}>Submit</button>
        </form>
      )}
    </>
  );
};
