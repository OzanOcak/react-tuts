import { useGreetings } from "..";

const Greetings = () => {
  //const datas = useContext(GreetingContext);
  //console.log(datas);
  //console.log(typeof datas);  --> Object
  //const { greetings } = useContext(GreetingContext); // greeting is an array
  const { greetings } = useGreetings();
  return (
    <ul>
      {greetings && greetings.map((el) => <li key={el.id}>{el.greet}</li>)}
    </ul>
  );
};
export default Greetings;
