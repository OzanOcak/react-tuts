import useFetch from "../hooks/useFetch";
import CheckBox from "./CheckBox";
import StarRating from "./StarRating";

const GithubProfile = ({ login }) => {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if (loading) return <h1>loading....</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <div className="flex flex-row">
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <div className="w-[9.5rem] p-1 hover:w-[9.75rem] hover:pr-0">
        <img
          src={data.avatar_url}
          alt={data}
          className="bg-contain rounded-xl"
        />
      </div>
      <div>
        <div className="pl-3">
          <h1>Username: {data.login}</h1>
          <p>Name: {data.name}</p>
          <p>Location: {data.location}</p>
        </div>
        <CheckBox />
        <StarRating totalStars={10} />
      </div>
    </div>
  );
};
export default GithubProfile;
