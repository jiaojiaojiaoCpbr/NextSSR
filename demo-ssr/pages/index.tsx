import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = ({ data }) => {
  return (
    <>
      <div>Hello Junyi Engineer!</div>
      <br />
      <div>
        <Link href="/ssr">
          <a>Link to SSR page</a>
        </Link>
      </div>
      <br />
      <div>
        <Link href="/csr">
          <a>Link to CSR page</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
