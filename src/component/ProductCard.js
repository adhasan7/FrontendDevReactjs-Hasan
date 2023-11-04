import React, { useMemo } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; // Pastikan Anda mengimpor Link jika Anda menggunakan React Router.

function ProductCard(props) {
  console.log(props.product.rating);
  const randerRating = useMemo(function () {
    const result = [];
    const rating = Math.round(props.product.rating);
    for (var i = 0; i < 5; i++) {
      if (i < rating) {
        result.push(<StarIconSolid className='w-4 text-blue-900' />);
      } else {
        result.push(<StarIcon className='w-4  text-blue-900' />);
      }
    }
    return result;
  }, []);
  return (
    <div className='border bg-slate-400 flex flex-col'>
      <div className='aspect-square overflow-hidden flex-none'>
        <img
          className='object-cover w-full h-full'
          src={props.product.images[0]}
        />
      </div>

      <div className='flex-1'>
        <div className='font-bold text-lg'>{props.product.title}</div>
        <div className='flex gap-2 mt-1'>{randerRating}</div>
      </div>
      <Link
        className='mt-1 bg-blue-950 text-white text-center w-full p-2 block flex-none'
        to={`/detail/${props.product.id}`}
      >
        Read More
      </Link>
    </div>
  );
}

export default ProductCard;
