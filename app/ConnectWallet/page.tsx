'use client'

import { useState, useEffect } from 'react'
import styles from './ConnectWallet.module.css'

interface WalletInfo {
  name: string
  icon: string
  description: string
  installed?: boolean
  downloadUrl?: string
}

interface ConnectedWallet {
  address: string
  balance: string
  network: string
  walletType: string
}

const ConnectWallet: React.FC = () => {
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectedWallet, setConnectedWallet] = useState<ConnectedWallet | null>(null)
  const [error, setError] = useState<string>('')
  const [showQRCode, setShowQRCode] = useState(false)
  const [selectedWallet, setSelectedWallet] = useState<string>('')

  const wallets: WalletInfo[] = [
    {
      name: 'MetaMask',
      icon: '🦊',
      description: 'Connect using browser wallet',
      installed: typeof window !== 'undefined' && !!(window as any).ethereum,
      downloadUrl: 'https://metamask.io/download/'
    },
    {
      name: 'WalletConnect',
      icon: '📱',
      description: 'Connect using mobile wallet',
      installed: true
    },
    {
      name: 'Coinbase Wallet',
      icon: '🔵',
      description: 'Connect using Coinbase',
      installed: typeof window !== 'undefined' && !!(window as any).coinbaseWalletExtension,
      downloadUrl: 'https://wallet.coinbase.com/'
    },
    {
      name: 'Trust Wallet',
      icon: '🛡️',
      description: 'Connect using Trust Wallet',
      installed: typeof window !== 'undefined' && !!(window as any).trustWallet,
      downloadUrl: 'https://trustwallet.com/download'
    },
    {
      name: 'Phantom',
      icon: '👻',
      description: 'Connect using Phantom (Solana)',
      installed: typeof window !== 'undefined' && !!(window as any).solana,
      downloadUrl: 'https://phantom.app/download'
    },
    {
      name: 'Rainbow',
      icon: '🌈',
      description: 'Connect using Rainbow wallet',
      installed: false,
      downloadUrl: 'https://rainbow.me/download'
    }
  ]

  // Check for existing connection on component mount
  useEffect(() => {
    checkExistingConnection()
  }, [])

  const checkExistingConnection = async () => {
    try {
      if (typeof window !== 'undefined' && (window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({ 
          method: 'eth_accounts' 
        })
        
        if (accounts.length > 0) {
          const balance = await (window as any).ethereum.request({
            method: 'eth_getBalance',
            params: [accounts[0], 'latest']
          })
          
          const network = await (window as any).ethereum.request({
            method: 'net_version'
          })
          
          setConnectedWallet({
            address: accounts[0],
            balance: (parseInt(balance, 16) / Math.pow(10, 18)).toFixed(4),
            network: getNetworkName(network),
            walletType: 'MetaMask'
          })
        }
      }
    } catch (error) {
      console.error('Error checking existing connection:', error)
    }
  }

  const getNetworkName = (networkId: string): string => {
    const networks: { [key: string]: string } = {
      '1': 'Ethereum Mainnet',
      '5': 'Goerli Testnet',
      '137': 'Polygon Mainnet',
      '80001': 'Mumbai Testnet',
      '56': 'BSC Mainnet',
      '97': 'BSC Testnet'
    }
    return networks[networkId] || `Network ${networkId}`
  }

  const connectWallet = async (walletName: string) => {
    setError('')
    setIsConnecting(true)
    setSelectedWallet(walletName)

    try {
      let accounts: string[] = []
      
      switch (walletName) {
        case 'MetaMask':
          if (!(window as any).ethereum) {
            throw new Error('MetaMask is not installed')
          }
          
          accounts = await (window as any).ethereum.request({
            method: 'eth_requestAccounts'
          })
          
          if (accounts.length > 0) {
            const balance = await (window as any).ethereum.request({
              method: 'eth_getBalance',
              params: [accounts[0], 'latest']
            })
            
            const network = await (window as any).ethereum.request({
              method: 'net_version'
            })
            
            setConnectedWallet({
              address: accounts[0],
              balance: (parseInt(balance, 16) / Math.pow(10, 18)).toFixed(4),
              network: getNetworkName(network),
              walletType: walletName
            })
          }
          break

        case 'WalletConnect':
          setShowQRCode(true)
          // Simulate WalletConnect flow
          setTimeout(() => {
            setConnectedWallet({
              address: '0x742d35Cc6638C0532c5C25F7a5b0dF0c2E42e5Dc',
              balance: '2.5847',
              network: 'Ethereum Mainnet',
              walletType: walletName
            })
            setShowQRCode(false)
          }, 3000)
          break

        case 'Coinbase Wallet':
          if (!(window as any).coinbaseWalletExtension) {
            throw new Error('Coinbase Wallet is not installed')
          }
          // Simulate Coinbase connection
          setTimeout(() => {
            setConnectedWallet({
              address: '0x892d35Cc6638C0532c5C25F7a5b0dF0c2E42e8Bc',
              balance: '1.2345',
              network: 'Ethereum Mainnet',
              walletType: walletName
            })
          }, 2000)
          break

        case 'Phantom':
          if (!(window as any).solana) {
            throw new Error('Phantom Wallet is not installed')
          }
          // Simulate Phantom connection
          setTimeout(() => {
            setConnectedWallet({
              address: 'DjVE6JNiYqPL2QXyCUUh8rNjHrbz9hXHNYt99MQ59qw1',
              balance: '15.6789',
              network: 'Solana Mainnet',
              walletType: walletName
            })
          }, 2000)
          break

        default:
          // Simulate other wallet connections
          setTimeout(() => {
            setConnectedWallet({
              address: '0x' + Math.random().toString(16).substr(2, 40),
              balance: (Math.random() * 10).toFixed(4),
              network: 'Ethereum Mainnet',
              walletType: walletName
            })
          }, 2000)
      }
    } catch (error: any) {
      setError(error.message || 'Failed to connect wallet')
    } finally {
      setIsConnecting(false)
      setSelectedWallet('')
    }
  }

  const disconnectWallet = () => {
    setConnectedWallet(null)
    setError('')
  }

  const copyAddress = () => {
    if (connectedWallet) {
      navigator.clipboard.writeText(connectedWallet.address)
      // You could add a toast notification here
    }
  }

  const formatAddress = (address: string): string => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  if (connectedWallet) {
    return (
      <div className={styles.container}>
        <div className={styles.connectedCard}>
          <div className={styles.connectedHeader}>
            <div className={styles.statusIndicator}>
              <div className={styles.statusDot}></div>
              <span className={styles.statusText}>Connected</span>
            </div>
            <button 
              onClick={disconnectWallet}
              className={styles.disconnectButton}
            >
              Disconnect
            </button>
          </div>

          <div className={styles.walletInfo}>
            <div className={styles.walletIcon}>
              {wallets.find(w => w.name === connectedWallet.walletType)?.icon || '💼'}
            </div>
            <h2 className={styles.walletName}>{connectedWallet.walletType}</h2>
          </div>

          <div className={styles.accountDetails}>
            <div className={styles.addressSection}>
              <label className={styles.label}>Wallet Address</label>
              <div className={styles.addressDisplay} onClick={copyAddress}>
                <span className={styles.address}>{formatAddress(connectedWallet.address)}</span>
                <span className={styles.copyIcon}>📋</span>
              </div>
            </div>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <label className={styles.label}>Balance</label>
                <span className={styles.value}>
                  {connectedWallet.balance} {connectedWallet.network.includes('Solana') ? 'SOL' : 'ETH'}
                </span>
              </div>
              <div className={styles.detailItem}>
                <label className={styles.label}>Network</label>
                <span className={styles.value}>{connectedWallet.network}</span>
              </div>
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>
              View on Explorer
            </button>
            <button className={styles.actionButton}>
              Send Tokens
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Connect Your Wallet</h1>
        <p className={styles.subtitle}>
          Choose your preferred wallet to connect to our NFT marketplace
        </p>
      </div>

      {error && (
        <div className={styles.errorAlert}>
          <span className={styles.errorIcon}>⚠️</span>
          <span>{error}</span>
          <button 
            onClick={() => setError('')}
            className={styles.closeError}
          >
            ×
          </button>
        </div>
      )}

      {showQRCode && (
        <div className={styles.qrModal}>
          <div className={styles.qrContent}>
            <h3>Scan QR Code</h3>
            <div className={styles.qrCode}>
              <div className={styles.qrPlaceholder}>
                📱<br />QR Code<br />Placeholder
              </div>
            </div>
            <p>Scan this QR code with your mobile wallet</p>
            <button 
              onClick={() => setShowQRCode(false)}
              className={styles.closeQR}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className={styles.walletsGrid}>
        {wallets.map((wallet) => (
          <div
            key={wallet.name}
            className={`${styles.walletCard} ${
              !wallet.installed ? styles.notInstalled : ''
            } ${
              isConnecting && selectedWallet === wallet.name ? styles.connecting : ''
            }`}
            onClick={() => {
              if (wallet.installed) {
                connectWallet(wallet.name)
              } else if (wallet.downloadUrl) {
                window.open(wallet.downloadUrl, '_blank')
              }
            }}
          >
            <div className={styles.walletIcon}>
              {wallet.icon}
            </div>
            <div className={styles.walletDetails}>
              <h3 className={styles.walletName}>{wallet.name}</h3>
              <p className={styles.walletDescription}>{wallet.description}</p>
              {!wallet.installed && (
                <span className={styles.installBadge}>Not Installed</span>
              )}
            </div>
            {isConnecting && selectedWallet === wallet.name && (
              <div className={styles.connectingSpinner}>
                <div className={styles.spinner}></div>
              </div>
            )}
            <div className={styles.connectArrow}>→</div>
          </div>
        ))}
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h3>Why Connect a Wallet?</h3>
          <ul className={styles.benefitsList}>
            <li>✨ Mint and trade NFTs</li>
            <li>🔒 Secure blockchain transactions</li>
            <li>💎 Access exclusive collections</li>
            <li>🏆 Participate in auctions</li>
          </ul>
        </div>
        
        <div className={styles.infoCard}>
          <h3>New to Wallets?</h3>
          <p>
            A crypto wallet stores your digital assets and lets you interact with 
            blockchain applications. We recommend starting with MetaMask for beginners.
          </p>
          <button className={styles.learnMoreButton}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConnectWallet