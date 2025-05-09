
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function App() {
  return (
    <div style={{
      padding: '50px',
      textAlign: 'center',
      backgroundColor: '#fff',
      color: '#222'
    }}>
      <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>
        🔐 Wallet Connect Working!
      </h1>
      <ConnectButton />
      <p style={{ marginTop: '20px' }}>
        This confirms RainbowKit & Wagmi integration is fully working.
      </p>
    </div>
  );
}
