import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Ensure to import the CSS for Skeleton
import Assets from './Assets';
import Status from './Evaluate/Status';
import Report from './Evaluate/Report';
import Info from './Evaluate/Info';
import axios from 'axios';

const EvaluateReport = ({ onBackClick, selectedToken, tokenAddress, chainId }) => {
  const [valueFetch, setValueFetch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTokenInfo = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://check-api.quillai.network/api/v1/tokens/information/${tokenAddress}?chainId=${chainId}`,
        {
          headers: {
            'x-api-key': '6muNpTyDvR9hGJBuG1muh5VlKE74V6Ik4cWNBmg0',
          },
        }
      );
      setValueFetch(res.data);
      console.log('====================================');
      console.log(res.data);
      console.log('====================================');
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
  }, [tokenAddress, chainId]);

  const tokenImages = {
    ETH: Assets.ETH,
    BSC: Assets.BSC,
    Polygon: Assets.Polygon,
    Base: Assets.Base,
  };

  const totalScore = parseFloat(valueFetch?.tokenScore?.totalScore?.percent);
  const tokenCreationDate = new Date(valueFetch?.tokenInformation?.tokenCreationDate);
  const currentDate = new Date();

  let buyTax = 0;
  let sellTax = 0;
  let transferTax = 0;

  if (valueFetch?.honeypotDetails?.length > 0) {
    const details = valueFetch.honeypotDetails[0];
    buyTax = parseFloat(details?.buyTax?.number || "0");
    sellTax = parseFloat(details?.sellTax?.number || "0");
    transferTax = parseFloat(details?.transferTax?.number || "0");
  }

  let tokenAge = 'Unknown';
  if (!isNaN(tokenCreationDate)) {
    const ageInMilliseconds = currentDate - tokenCreationDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    tokenAge = `${Math.floor(ageInYears)} years`;
  }

  const criticalPoint = valueFetch?.tokenInformation.totalChecksInformation?.aggregatedCount.find(item => item.name === "Critical")?.count || 0;
  const riskyPoint = valueFetch?.tokenInformation.totalChecksInformation?.aggregatedCount.find(item => item.name === "RISKY")?.count || 0;
  const mediumPoint = valueFetch?.tokenInformation.totalChecksInformation?.aggregatedCount.find(item => item.name === "Medium Risk")?.count || 0;
  const neutralPoint = valueFetch?.tokenInformation.totalChecksInformation?.aggregatedCount.find(item => item.name === "Neutral")?.count || 0;
  
  console.log(criticalPoint, riskyPoint, mediumPoint, neutralPoint);
  
  const holdersCount = parseFloat(valueFetch?.marketChecks?.holdersChecks?.holdersCount?.number);
  const currentLiquidity = parseFloat(valueFetch?.tokenInformation?.marketData?.currentPriceUsd);
  const lpHolders = parseFloat(valueFetch?.marketChecks?.liquidityChecks?.aggregatedInformation?.lpHolderCount?.number);

  const critical = valueFetch?.riskCategories?.critical || 0;
  const risky = valueFetch?.riskCategories?.risky || 0;
  const medium = valueFetch?.riskCategories?.medium || 0;
  const neutral = valueFetch?.riskCategories?.neutral || 0;

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  // Honeypot status message
  const honeypotStatus = valueFetch?.honeypotDetails?.isTokenHoneypot === 1 ? "Honeypot" : "Not a Honeypot";

  return (
    <div
      className="bg-[#18162099]/60 rounded-[10px] backdrop-filter h-full backdrop-blur-sm w-[460px] mx-auto jost text-white"
      style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.5)' }}
    >
      <div className="bg-[#181B2E] rounded-t-[10px] p-[15px] px-[20px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Skeleton for Avatar and Token Name */}
            {loading ? (
              <>
                <Skeleton circle={true} height={20} width={20} />
                <Skeleton width={100} height={20} />
                <Skeleton width={50} height={15} />
              </>
            ) : (
              <>
                <img className='h-5' src={Assets.Avatar} alt="Avatar" />
                <p className="text-lg text-center">{valueFetch?.tokenInformation.tokenName || 'Token Name'}</p>
                <p className='text-xs'>({valueFetch?.tokenInformation.tokenSymbol || 'Symbol'})</p>
              </>
            )}
          </div>

          <div className="flex rounded-[20px]">
            {loading ? (
              <Skeleton height={30} width={80} />
            ) : (
              <button
                onClick={onBackClick}
                className="bg-[#007AFF] hover:bg-[#007AFF]/70 rounded-[5px] text-white p-1 px-6 text-base border-y border-y-[#86AFFF]"
              >
                Back
              </button>
            )}
          </div>
        </div>

        {/* Token Address */}
        <p className='text-xs text-white flex items-center'>
          {loading ? (
            <Skeleton width={250} />
          ) : (
            selectedToken && (
              <span className="mr-2 bg-black p-[6px] px-4 rounded-[5px] text-sm flex gap-1 items-center">
                {tokenImages[selectedToken] && (
                  <img src={tokenImages[selectedToken]} alt={selectedToken} className="h-3" />
                )}
                {selectedToken}
              </span>
            )
          )}
          {loading ? <Skeleton width={200} /> : (tokenAddress || 'Enter Token Address')}
        </p>
      </div>

      <div className="p-[20px]">
        <div className="flex items-center justify-between h-full">
          {/* Status and Report */}
          {loading ? (
            <>
              <Skeleton width={100} height={100} />
              <Skeleton width={200} height={100} />
            </>
          ) : (
            <>
              <Status totalScore={totalScore} tokenAge={tokenAge} honeypotStatus={honeypotStatus}/>
              <div className="border-l-2 border-white/10 mx-5 self-stretch"></div>
              <Report critical={critical} risky={risky} medium={medium} neutral={neutral} />
            </>
          )}
        </div>

        <div className="border-b-2 border-white/10 my-5 self-stretch"></div>

        {/* Info Section */}
        {loading ? (
          <Skeleton width={400} height={60} />
        ) : (
          <Info
            holdersCount={formatNumber(holdersCount)}
            currentLiquidity={currentLiquidity}
            lpHolders={lpHolders}
            buyTax={buyTax}
            sellTax={sellTax}
            transferTax={transferTax}
          />
        )}

        {/* Honeypot Status Display */}
        <div className="text-center text-lg mt-4">
          {loading ? <Skeleton width={200} height={30} /> : <p>{honeypotStatus}</p>}
        </div>
      </div>
    </div>
  );
};

export default EvaluateReport;
