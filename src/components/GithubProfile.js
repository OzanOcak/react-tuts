import useFetch from "../hooks/useFetch";

const GithubProfile = ({ login }) => {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if (loading) return <h1>loading....</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <div>
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <h1>{data.login}</h1>
      <img src={data.avatar_url} alt={data} height={160} />
      <p>{data.name}</p>
      <p>{data.location}</p>
    </div>
  );
};
export default GithubProfile;
