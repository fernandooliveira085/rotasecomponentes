import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <p>
        ID do usuário: <strong>{id}</strong>
      </p>
    </div>
  );
}

export default UserProfile;