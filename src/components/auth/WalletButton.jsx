
import { useState , useEffect } from 'react';
import { CodeSquare, Wallet } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const WalletButton = ({ fullWidth = true, onClick }) => {

  const [isConnected, setIsConnected] = useState(false)
  const [Active,setActive] = useState()

  useEffect(()=>{

      
    })

  const { login, isLoading } = useAuth();

  
  const handleConnect = async () => {
    try {
      if(window.ethereum){
        console.log("Inattempting to connect")
        const Accounts = await window.ethereum.request({method:'eth_requestAccounts'})
          console.log(Accounts)
          setActive(Accounts[0])
          setIsConnected(true)
      }

    } catch (error) {
      console.error('Connection failed:', error);
    }
  };

  const Disconnect = () => {
    window.ethereum.request({method:'wallet_revokePermissions',params:[{eth_accounts:{}}]})
    setIsConnected(false)
  }
  
  return (
    <div>
      
    <div className={`flex gap-3 items-center`}>  
    <p style = {{display: isConnected ? 'flex' : 'none'}}>{Active}</p>
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