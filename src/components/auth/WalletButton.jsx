
import { useState , useEffect } from 'react';
import { CodeSquare, Wallet } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const WalletButton = ({ fullWidth = true, onClick }) => {

  const [isConnected, setIsConnected] = useState(false)
  const [Active, setActive] = useState()

  useEffect(()=>{


    })

  const { login, isLoading, isAuthenticated } = useAuth();

console.log(isAuthenticated)
  const handleConnect = async () => {
    try {
      if(window.ethereum){
        console.log("Attempting to connect")
        const Accounts = await window.ethereum.request({method:'eth_requestAccounts'})
          console.log(Accounts)
        setActive(Accounts[0])
        toast.success("Wallet Connected Successifully!")
        setIsConnected(true)
        // ==== set isAuthenticated = true after wallet connection
        await login()
      }

    } catch (error) {
      console.error('Connection failed:', error);
    }
  };

  const Disconnect = () => {
    window.ethereum.request({method:'wallet_revokePermissions',params:[{eth_accounts:{}}]})
    setIsConnected(false)
    toast.success("Wallet Disonnected!")
  }

  return (
    <div>

      <div className={`flex gap-3 items-center`}>
        {/* created space in header */}
    <p style = {{display: isConnected ? 'flex' : 'none'}}>{Active?.slice(0, 7)}...{Active?.slice(-4)}</p>
    <button
    id="Connect"
    onClick={handleConnect}
    style = {{display: isConnected ? 'none' : 'flex'}}
    className={`btn btn-primary flex items-center justify-center transition-all duration-300`}>
    Connect Wallet
    </button>

    <button
     onClick={Disconnect}
    style = {{display: isConnected ? 'flex' : 'none'}}
    className={`btn btn-primary flex items-center justify-center transition-all duration-300`}>
      Disconnect
    </button>
    </div>

    </div>
  )
}

export default WalletButton;
