import Home from '.';
import Head from 'next/head.js';
import '../styles/globals.css'; // Path to your global CSS file

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/LB_fav.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Kaushan+Script:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
