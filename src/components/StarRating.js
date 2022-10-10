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
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
};
export default StarRating;
