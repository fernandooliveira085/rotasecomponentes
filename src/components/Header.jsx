import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      backgroundColor: '#282c34',
      padding: '16px',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1>Meu Site</h1>
      
      <nav style={{ marginTop: '12px' }}>
        <Link to="/" style={{ color: 'white', margin: '0 16px', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', margin: '0 16px', textDecoration: 'none' }}>Sobre</Link>
        <Link to="/contact" style={{ color: 'white', margin: '0 16px', textDecoration: 'none' }}>Contato</Link>
        <Link to="/user/123" style={{ color: 'white', margin: '0 16px', textDecoration: 'none' }}>Perfil Exemplo</Link>
      </nav>
    </header>
  );
}

export default Header;