import { useState } from 'react'

export function MyForm() {
  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false,
  });

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleResetForm() {
    setData({
      username: '',
      password: '',
      remember: false,
    });
  }

  function handleLogin(event) {
    event.preventDefault();

    console.log('Logging in with:', data);
  }

  return (
    <div>
      <h1>Exercise</h1>
      <form onSubmit={handleLogin}>
        <input name="username" value={data.username} onChange={handleInputChange} />
        <input name="password" type="password" value={data.password} onChange={handleInputChange} />
        <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange} />
        <button type="submit" disabled={!data.username || !data.password}>
          Login
        </button>
        <button type="button" onClick={handleResetForm}>
          Reset
        </button>
      </form>
    </div>
  );
}


// Per impedire il comportamento predefinito del form ho utilizzato il method 'preventDefault'.