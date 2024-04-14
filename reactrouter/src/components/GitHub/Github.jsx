import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sharmahimanshu65018")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div>
      <p>Login: {data.login}</p>
      <img src={data.avatar_url} alt="Avatar" />
    </div>
  );
}
export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/sharmahimanshu65018"
  );
  return response.json();
};
