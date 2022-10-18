import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { FaApple } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="flex justify-between items-center lg:flex-col h-full z-10 relative lg:py-4">
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

        <div className="hidden lg:block py-8">
          <ul className="flex lg:flex-col justify-between items-start gap-3">
            <li className="hover:bg-white hover:text-neutral-900 p-3 rounded-full">
              <Link href="https://www.facebook.com">
                <a
                  className="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={24}></FaFacebookF>
                </a>
              </Link>
            </li>

            <li className="hover:bg-white hover:text-neutral-900 p-3 rounded-full">
              <Link href="https://www.twitter.com">
                <a
                  className="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitter size={24}></BsTwitter>
                </a>
              </Link>
            </li>

            <li className="hover:bg-white hover:text-neutral-900 p-3 rounded-full">
              <Link href="https://www.google.com/">
                <a className="Google">
                  <TiSocialGooglePlus size={24} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <nav
        className={`absolute left-0 -top-full transition-transform transform-gpu ${
          menuOpen ? 'translate-y-full' : ''
        } h-screen w-screen lg:w-screen-1/3 text-white bg-neutral-900`}
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
