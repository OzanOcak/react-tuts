import { useGreetings } from "..";

const Greetings = () => {
  //const datas = useContext(GreetingContext);
  //console.log(datas);
  //console.log(typeof datas);  --> Object
  //const { greetings } = useContext(GreetingContext); // greeting is an array
  const { greetings } = useGreetings();
  return (
    <ul className="flex flex-row divide-x-2 divide-solid py-5 top-0 fixed bg-[lightgray] w-full justify-content items-start ">
      {greetings &&
        greetings.map((el) => (
          <li className="px-4" key={el.id}>
            {el.greet}
          </li>
        ))}
    </ul>
  );
};
export default Greetings;
