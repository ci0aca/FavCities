export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <header style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
            <nav>
              <a href="/home" style={{ margin: '0 10px', color: 'white' }}>Home</a>
              <a href="/search" style={{ margin: '0 10px', color: 'white' }}>Search</a>
              <a href="/city" style={{ margin: '0 10px', color: 'white' }}>City</a>
              <a href="/favorites" style={{ margin: '0 10px', color: 'white' }}>Favorites</a>
            </nav>
          </header>
          <main>{children}</main>
        </body>
      </html>
    );
  }