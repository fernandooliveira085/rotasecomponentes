import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
      <h1>404 - Página Não Encontrada</h1>
      <p>O que você está procurando não existe aqui.</p>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
}

export default NotFound;