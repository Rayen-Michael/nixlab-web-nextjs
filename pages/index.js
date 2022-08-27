import Head from 'next/head';
import Hero from '../components/hero';

export default function Home() {

  return (
    <div className="app">
      <Head>
        <title>Welcome To NixLab Technologies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

    </div>
  );

}
