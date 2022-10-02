import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { FaApple } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="flex justify-between items-center h-full z-10 relative">
        <Link href="/">
          <a title="Home">
            <FaApple size="32"></FaApple>
          </a>
        </Link>

        <button
          title="Menu"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <AiOutlineClose size="32"></AiOutlineClose>
          ) : (
            <CgMenu size="32"></CgMenu>
          )}
        </button>
      </section>

      <nav
        className={`absolute left-0 ${
          menuOpen ? 'top-0' : '-top-full'
        } h-screen w-screen text-white bg-neutral-900`}
      >
        <ul className="flex justify-center items-center h-full flex-col text-2xl uppercase font-bold gap-4">
          <li>
            <Link href="/">
              <a title="Shop">Shop</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a title="About">About</a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a title="Contact">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
