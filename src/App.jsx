import React, { useState } from 'react';
import Assets from './components/Assets';
import SelectToken from './components/SelectToken';
import EvaluateReport from './components/EvaluateReport';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [showReport, setShowReport] = useState(false); // Toggle between SelectToken and EvaluateReport
  const [selectedToken, setSelectedToken] = useState(''); // State to store selected token
  const [tokenAddress, setTokenAddress] = useState(''); // State to store entered token address
  const [chainId, setChainId] = useState(null); // State to store chainId
  const [empty, setEmpty] = useState(false)
  const [buttonclick, setButtonclick] = useState(false)
  // Chain ID map for different networks
  const tokenChainMap = {
    ETH: 1,
    BSC: 56,
    Polygon: 137,
    Base: 8453,
  };

  const handleCheckClick = () => {
    if (tokenAddress === '') {
      setEmpty(true)
      return;
    }

    if (selectedToken === '') {
      setButtonclick(true)
      return
    }
    setShowReport(true); // Show EvaluateReport when Check is clicked
  };

  const handleBackClick = () => {
    setShowReport(false); // Show SelectToken when Back is clicked
  };

  return (
    <div className="h-screen bg-cover bg-center bricolage-font pb-6 bg-custom-bg jost flex justify-center items-center pt-3">
      <div className="p-3 space-y-5">
        <img className="w-[200px] h-[40px] mx-auto" src={Assets.QuillCheckLogo} alt="Quill Check Logo" />

        {/* AnimatePresence with mode="wait" */}
        <AnimatePresence mode="wait">
          {!showReport ? (
            <motion.div
              key="select-token"
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -180 }}
              transition={{ duration: 0.6 }}
            >
              {/* Pass setSelectedToken, setTokenAddress, and setChainId */}
              <SelectToken
                onCheckClick={handleCheckClick}
                setSelectedToken={setSelectedToken}
                setTokenAddress={setTokenAddress}
                setChainId={setChainId} // Pass the setChainId handler
                empty={empty}
                setempty={setEmpty}
                buttonclick={buttonclick}
                setButtonclick={setButtonclick}
              />
            </motion.div>
          ) : (
            <motion.div
              key="evaluate-report"
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -180 }}
              transition={{ duration: 0.6 }}
            >
              {/* Pass the selected token, token address, and chainId to EvaluateReport */}
              <EvaluateReport
                onBackClick={handleBackClick}
                selectedToken={selectedToken}
                tokenAddress={tokenAddress}
                chainId={chainId} // Pass chainId to the report
              />
            </motion.div>
          )}
        </AnimatePresence>

        <p className="flex justify-center text-white text-lg font-light">
          <img className="h-5 pl-2" src={Assets.QuillAI} alt="QuillAI" />
        </p>
        <div className='flex justify-center items-center text-white'>
          Powered by Winks.fun
        </div>
      </div>

    </div>
  );
};

export default App;
