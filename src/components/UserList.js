import { useEffect, useState } from "react";
import GithubProfile from "./GithubProfile";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  });
  console.log(users);
  return (
    <>
      {users &&
        users.map((user) => (
          <li key={user.id}>
            <GithubProfile login={user.login} />
          </li>
        ))}
    </>
  );
};
export default UserList;
