import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect }) => {
  return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
};

const StarRating = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  useEffect(() => {
    console.log(`${selectedStars} of ${totalStars}`);
  }, [selectedStars]);
  return (
    <div className="flex flex-row m-2 p-1 border rounded-[.8rem] w-[15.5rem] hover:bg-[lightgray]">
      <div className="flex flex-row mt-1">
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
      </div>

      <p className="ml-4  text-md font-bold">
        {selectedStars} of {totalStars}
      </p>
    </div>
  );
};
export default StarRating;
