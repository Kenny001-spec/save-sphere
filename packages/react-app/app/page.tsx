import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useWeb3 } from '@celo/react-celo';

export default function Home() {
  const { connect, address } = useWeb3();
  const router = useRouter();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    try {
      await connect();
      router.push('/dashboard');
    } catch (error) {
      console.error('Wallet connection failed:', error);
      setIsConnecting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Decentralized Microsavings Platform</title>
        <meta name="description" content="Save, invest, and impact with our decentralized platform on Celo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white font-sans text-gray-800">
        <header className="bg-[#2F2E5F] text-white py-4 px-6 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <h1 className="ml-2 text-xl font-bold">Microsavings Platform</h1>
          </div>
          <nav>
            <a href="#features" className="mr-4 hover:text-[#FBCC5C]">Features</a>
            <a href="#about" className="mr-4 hover:text-[#FBCC5C]">About</a>
            <button
              onClick={handleConnectWallet}
              disabled={isConnecting}
              className="bg-[#FBCC5C] text-[#2F2E5F] px-4 py-2 rounded-full hover:bg-[#35D07F] transition"
            >
              {isConnecting ? 'Connecting...' : address ? 'Connected' : 'Connect Wallet'}
            </button>
          </nav>
        </header>
        <section className="bg-gradient-to-r from-[#2F2E5F] to-[#35D07F] text-white py-20 px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Save Small, Impact Big</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join our decentralized platform on Celo to save cUSD, earn interest through DeFi, and support community projects with transparent donations.
          </p>
          <button
            onClick={handleConnectWallet}
            disabled={isConnecting}
            className="bg-[#FBCC5C] text-[#2F2E5F] px-6 py-3 rounded-full text-lg font-semibold hover:bg-white transition"
          >
            {isConnecting ? 'Connecting...' : 'Get Started with Valora'}
          </button>
        </section>
        <section id="features" className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2F2E5F]">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-[#35D07F] text-4xl mb-4">💸</div>
              <h3 className="text-xl font-semibold mb-2">Microsavings</h3>
              <p className="text-gray-600">Save as little as $0.10 daily in cUSD with low-cost Celo transactions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-[#35D07F] text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Automated Investments</h3>
              <p className="text-gray-600">Earn interest by automatically investing in low-risk Celo DeFi pools.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-[#35D07F] text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Social Impact</h3>
              <p className="text-gray-600">Donate a portion of your interest to verified community projects, tracked on-chain.</p>
            </div>
          </div>
        </section>
        <section id="about" className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#2F2E5F]">About Our Platform</h2>
            <p className="text-lg text-gray-600 mb-8">
              Built on the Celo blockchain, our platform empowers users to save small amounts, invest in DeFi, and make a difference in their communities. With transparent donation tracking on IPFS and a reputation system for projects, we ensure trust and impact.
            </p>
            <a href="#features" className="text-[#FBCC5C] font-semibold hover:underline">Learn More</a>
          </div>
        </section>
        <footer className="bg-[#2F2E5F] text-white py-8 px-6 text-center">
          <p className="mb-4">Powered by <a href="https://celo.org" target="_blank" rel="noopener noreferrer" className="text-[#FBCC5C] hover:underline">Celo</a></p>
          <p>© 2025 Microsavings Platform. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}