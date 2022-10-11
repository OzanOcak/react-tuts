import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  });
  return (
    <>{users && users.map((user) => <li key={user.id}>{user.login}</li>)}</>
  );
};
export default UserList;
