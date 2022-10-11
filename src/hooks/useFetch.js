import { useEffect, useState } from "react";

const useFetch = (uri) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState("false");
  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch((error) => setError(error));
  }, [uri]);
  return { loading, data, error };
};
export default useFetch;
