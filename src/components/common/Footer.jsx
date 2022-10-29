import { BsArrowUpCircleFill } from 'react-icons/bs';

export const Footer = () => {
  const backToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="container px-4 py-6 mx-auto grid grid-cols-2 gap-4 lg:grid-cols-4 items-center text-gray-500">
        <section className="flex flex-col gap-2">
          <h1 className="font-bold uppercase text-gray-900">Los Angeles</h1>
          <ul>
            <li>145 Oliveshka Street,</li>
            <li>Los Angeles, LA90003</li>
            <li>+44 987 065 901</li>
            <li>Info@Example.com</li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h1 className="font-bold uppercase text-gray-900">San Fancisco</h1>
          <ul>
            <li>210 Pier Street,</li>
            <li>San Francisco, CA 94111</li>
            <li>+44 987 065 902</li>
            <li>Info@Example.com</li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h1 className="font-bold uppercase text-gray-900">New York</h1>
          <ul>
            <li>711 Snow Street,</li>
            <li>New York, NY 10014</li>
            <li>+44 987 065 901</li>
            <li>Info@Example.com</li>
          </ul>
        </section>

        <div className="grid grid-cols-2 gap-3">
          <section className="flex flex-col gap-2">
            <h1 className="font-bold uppercase text-gray-900">Follow Us</h1>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  className="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  className="linkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </section>

          <section>
            <ul>
              <li>
                <a
                  href="https://dribbble.com/"
                  className="dribbble"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/"
                  className="behance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="https://ro.pinterest.com/"
                  className="pinterest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="border border-t border-1-neutral mt-8"></div>

      <div className="relative container px-4 lg:px-0 mx-auto flex items center justify-center lg:py-3 text-zinc-400">
        <button className="absolute -top-5" onClick={backToTop}>
          <BsArrowUpCircleFill size="44" />
        </button>
      </div>

      <div className="m-6 border-gray-300">
        <p className="text-center text-gray-500 p-6">
          &copy; 2022. Design by Raluca
        </p>
      </div>
    </>
  );
};
