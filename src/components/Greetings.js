import { useContext } from "react";
import { GreetingContext } from "..";

const Greetings = () => {
  //const datas = useContext(GreetingContext);
  //console.log(datas);
  //console.log(typeof datas);  --> Object
  const { greetings } = useContext(GreetingContext); // greeting is an array
  return greetings.map((el) => <li key={el.id}>{el.greet}</li>);
};
export default Greetings;
