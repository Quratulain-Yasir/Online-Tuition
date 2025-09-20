import React from 'react'

const NotFound = () => {
  return (
      <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '500px', margin: '50px auto', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#e74c3c' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <p>
        <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#3498db', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Go to Home
        </a>
      </p>
    </div>
  )
}

export default NotFound