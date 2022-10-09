import Link from 'next/link';

import { BsArrowLeftSquareFill } from 'react-icons/bs';

export const ContinueShopping = () => {
  return (
    <Link href="/">
      <div className="cursor-pointer flex items-center justify-center px-5 gap-5">
        <BsArrowLeftSquareFill size={24} />
        <a className="uppercase font-bold" title="back to shopping">
          Back to Shopping
        </a>
      </div>
    </Link>
  );
};

import React from 'react';
