import Link from 'next/link';

import { BsArrowLeftCircleFill } from 'react-icons/bs';

export const ContinueShopping = () => {
  return (
    <Link href="/">
      <div className="cursor-pointer flex items-center justify-center hover:text-zinc-700 mt-6 px-5 gap-5">
        <BsArrowLeftCircleFill size={30} />
        <a className="uppercase font-bold" title="back to shopping">
          Back to Shop
        </a>
      </div>
    </Link>
  );
};

import React from 'react';
