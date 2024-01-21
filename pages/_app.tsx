import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  sepolia,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
require('dotenv').config()
import { Kulim_Park } from 'next/font/google'

const kulimPark = Kulim_Park({
  weight: ['300', '400', '600'],
  subsets: ['latin']
})

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    sepolia,
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} className={kulimPark.className} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
