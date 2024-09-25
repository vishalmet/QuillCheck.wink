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

  const fetchTokenInfo = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://check-api.quillai.network/api/v1/tokens/information/${tokenAddress}?chainId=1`,
        {
          headers: {
            'x-api-key': '6muNpTyDvR9hGJBuG1muh5VlKE74V6Ik4cWNBmg0',
          },
        }
      );
      console.log("res", res.data);
      
      setValueFetch(res.data);
    } catch (error) {
      setError('Failed to fetch token information');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tokenAddress) {
      fetchTokenInfo();
    }
  }, [tokenAddress]);

  const tokenImages = {
    ETH: Assets.ETH,
    BSC: Assets.BSC,
    Polygon: Assets.Polygon,
    Base: Assets.Base,
  };

  if (loading) return <p>Loading...</p>;

  const totalScore = parseFloat(valueFetch?.tokenScore?.totalScore?.percent);
  const tokenCreationDate = new Date(valueFetch?.tokenInformation?.tokenCreationDate); // Use the correct field for the creation date
  const currentDate = new Date();

  let tokenAge = 'Unknown';
  if (!isNaN(tokenCreationDate)) {
    const ageInMilliseconds = currentDate - tokenCreationDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    tokenAge = `${Math.floor(ageInYears)} years`;
  }

  const holdersCount = parseFloat(valueFetch?.marketChecks?.holdersChecks?.holdersCount?.number);
  const currentLiquidity = parseFloat(valueFetch?.tokenInformation?.marketData?.currentPriceUsd);
  const lpHolders = parseFloat(valueFetch?.marketChecks?.liquidityChecks?.aggregatedInformation?.lpHolderCount?.number);

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
        <p className='text-xs text-white flex items-center'>
          {selectedToken && <span className="mr-2 bg-black p-[6px] px-4 rounded-[5px] text-sm flex gap-1 items-center">
            {selectedToken && tokenImages[selectedToken] && (
              <img src={tokenImages[selectedToken]} alt={selectedToken} className="h-3" />
            )}
            {selectedToken}</span>}
          {tokenAddress || 'Enter Token Address'}
        </p>
      </div>

      <div className="p-[20px]">
        <div className="flex items-center justify-between h-full">
          <Status totalScore={totalScore} tokenAge={tokenAge} />
          <div className="border-l-2 border-white/10 mx-5 self-stretch"></div>
          <Report />
        </div>

        <div className="border-b-2 border-white/10 my-5 self-stretch"></div>

        <Info holdersCount={holdersCount} currentLiquidity={currentLiquidity} lpHolders={lpHolders} />
      </div>
    </div>
  );
};

export default EvaluateReport;
