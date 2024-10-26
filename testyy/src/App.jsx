// // App.jsx
// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// // Regular Component
// function Home() {
//   return <h2>Welcome to the Home Page</h2>;
// }

// // Lazy Loaded Component
// const Profile = React.lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import('./Profile')), 2000);
//   });
// });

// // Profile Component

// // Main App Component
// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>
//       </nav>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
// Directly import the component
import { BrowserRouter , Routes, Route, Link } from'react-router-dom';
import { Suspense } from 'react';
// import Profile from './Profile';

const Profile = React.lazy(()=>
import("./Profile"));

function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
