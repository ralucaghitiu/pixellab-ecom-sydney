import { BsFillStarFill } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';

export const ProductReview = ({ stars, count }) => {
  return (
    <div className="gap-3 my-3">
      <div className="flex pt-2 text-sm lg:text-lg">
        {Array(5)
          .fill('_')
          .map((_, index) => {
            return index < Math.round(stars) ? (
              <BsFillStarFill
                className="text-zinc-700"
                key={index}
              ></BsFillStarFill>
            ) : (
              <FaRegStar className="text-zinc-700" key="{index}"></FaRegStar>
            );
          })}
      </div>
      <div>{`${stars} stars (from ${count} reviews) `}</div>
    </div>
  );
};
