import React, { useEffect, useState } from 'react';
import Assets from './Assets';
import Status from './Evaluate/Status';
import Report from './Evaluate/Report';
import Info from './Evaluate/Info';
import axios from 'axios';

const EvaluateReport = ({ onBackClick, selectedToken, tokenAddress }) => {
  const [valueFetch, setValueFetch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch token information
  const fetchTokenInfo = async () => {
    setLoading(true); // Start loading
    try {
      const res = await axios.get(
        `https://check-api.quillai.network/api/v1/tokens/information/${tokenAddress}?chainId=1`,
        {
          headers: {
            'x-api-key': '6muNpTyDvR9hGJBuG1muh5VlKE74V6Ik4cWNBmg0', // Replace with your actual API key
          },
        }
      );
      console.log("res", res.data);
      setValueFetch(res.data); // Store the fetched data
    } catch (error) {
      setError('Failed to fetch token information');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (tokenAddress) {
      fetchTokenInfo();
    }
  }, [tokenAddress]);

  // Map tokens to corresponding asset images
  const tokenImages = {
    ETH: Assets.ETH,
    BSC: Assets.BSC,
    Polygon: Assets.Polygon,
    Base: Assets.Base,
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Extract values from the API response and make sure it's correctly parsed
  const totalScore = parseFloat(valueFetch?.tokenScore?.totalScorePercentage) || 0;
  const codeScore = valueFetch?.tokenScore?.codeScorePercentage || '0';
  const marketScore = valueFetch?.tokenScore?.marketScorePercentage || '0';

  return (
    <div
      className="bg-[#18162099]/60 rounded-[10px] backdrop-filter h-full backdrop-blur-sm w-[460px] mx-auto jost text-white"
      style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.5)' }}
    >
      <div className="bg-[#181B2E] rounded-t-[10px] p-[15px] px-[20px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className='h-5' src={Assets.Avatar} alt="" />
            <p className="text-lg text-center">{valueFetch?.tokenInformation.tokenName || 'Token Name'}</p>
            <p className='text-xs'>({valueFetch?.tokenInformation.tokenSymbol || 'Symbol'})</p>
          </div>
          <div className="flex rounded-[20px]">
            <button
              onClick={onBackClick}
              className="bg-[#007AFF] hover:bg-[#007AFF]/70 rounded-[5px] text-white p-1 px-6 text-base border-y border-y-[#86AFFF]"
            >
              Back
            </button>
          </div>
        </div>
        <div className="">
          {/* Display token image, token name, and entered address */}
          <p className='text-xs text-white flex items-center'>
            {selectedToken && <span className="mr-2 bg-black p-[6px] px-4 rounded-[5px] text-sm flex gap-1 items-center">
              {selectedToken && tokenImages[selectedToken] && (
                <img
                  src={tokenImages[selectedToken]}
                  alt={selectedToken}
                  className="h-3"
                />
              )}
              {selectedToken}</span>}
            {tokenAddress || 'Enter Token Address'}
          </p>
        </div>
      </div>

      <div className="p-[20px]">
        <div className="flex items-center justify-between h-full">
          {/* Pass totalScore to the Status component */}
          <Status totalScore={totalScore} />

          <div className="border-l-2 border-white/10 mx-5 self-stretch"></div>

          {/* Pass codeScore and marketScore to the Report component */}
          <Report codeScore={codeScore} marketScore={marketScore} />
        </div>

        <div className="border-b-2 border-white/10 my-5 self-stretch"></div>

        <Info />
      </div>

    </div>
  );
};

export default EvaluateReport;
