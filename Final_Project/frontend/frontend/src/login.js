// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './App.css';

// function Login({ setLoggedInUsername }) { // Accept the prop for setting the logged-in user
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate(); // Hook for programmatic navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         setMessage('Login successful!');
//         setLoggedInUsername(username); // Save the logged-in user's username
//         navigate('/dashboard'); // Redirect to the Dashboard
//       } else {
//         const error = await response.json();
//         setMessage(`Error: ${error.error || 'Login failed'}`);
//       }
//     } catch (err) {
//       setMessage(`Error: ${err.message}`);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//         {message && <p>{message}</p>}
//       </header>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './App.css';

// function Login({ setLoggedInUsername }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         setMessage('Login successful!');
//         setLoggedInUsername(username);
//         navigate('/dashboard');
//       } else {
//         const error = await response.json();
//         setMessage(`Error: ${error.error || 'Login failed'}`);
//       }
//     } catch (err) {
//       setMessage(`Error: ${err.message}`);
//     }
//   };

//   return (
//     <div className="login-container">
//       <header className="App-header">
//         <h1>Welcome Back!</h1>
//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               placeholder="Enter your username"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="Enter your password"
//             />
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//         {message && <p className="message">{message}</p>}
//         <div className="signup-link">
//           <p>
//             Don't have an account?{' '}
//             <span onClick={() => navigate('/signup')} className="link">
//               Sign up
//             </span>
//           </p>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login({ setLoggedInUsername }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        setMessage('Login successful!');
        setLoggedInUsername(username);
        navigate('/dashboard');
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.error || 'Login failed'}`);
      }
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        {message && <p className="login-message">{message}</p>}
        <div className="signup-link">
          <p>
            Don't have an account?{' '}
            <span onClick={() => navigate('/signup')} className="link">
              Sign up
            </span>
          </p>
        </div>
      </header>
    </div>
  );
}

export default Login;
