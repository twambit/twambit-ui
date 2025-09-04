# Code Citations

## License: unknown
https://github.com/invoiceninja/invoiceninja/tree/28377fa73007aa32f702c0e014a44f9d64430c99/tests/Feature/PdfMaker/example.html

```
-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /
```


## License: unknown
https://github.com/Chesta0703/Webrtc-video-chat/tree/22243ea52014ba7fddbd502981285df126e694b9/index.html

```
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebRTC Video Chat<
```

## License: MIT
https://github.com/tailwindcss/tailwindcss/blob/HEAD/LICENSE

```
import React, { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (onRegister) {
      onRegister({ username, email, password });
    }
  };

  return (
    <form
      className="max-w-sm mx-auto mt-8 p-6 bg-white rounded shadow"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="username">
          Username
        </label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-1 font-medium" htmlFor="password">
          Password
        </label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};
```

