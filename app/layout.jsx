import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="navbar-brand">
            <img src="/imagenes/menu.png" alt="Menú"></img>
          </div>
          <div className="navbar-brand-logo">
            <img src="/imagenes/logo_blanco.jpg" alt="Logo"></img>
          </div>
          <div className="navbar-search">
            <input type="text" className="search-input" placeholder="Buscar" />
            <button type="submit" className="search-button"></button>
          </div>
          <button className="arrow-button">
            <div className="ellipse"></div>
          </button>
        </nav>

        {/* Mini menú */}
        <div className="mini-menu">
          <ul>
            <li><a href="/">INICIO</a></li>
            <li><a href="http://localhost:3000/blog">BLOG</a></li>
            <li><a href="http://localhost:3000/registro">REGISTRO</a></li>
          </ul>
        </div>

        {children}
      </body>
    </html>
  );
}

  
