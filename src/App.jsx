import React, { useState } from 'react';
import Assets from './components/Assets';
import SelectToken from './components/SelectToken';
import EvaluateReport from './components/EvaluateReport';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [showReport, setShowReport] = useState(false); // Toggle between SelectToken and EvaluateReport

  const handleCheckClick = () => {
    setShowReport(true); // Show EvaluateReport when Check is clicked
  };

  const handleBackClick = () => {
    setShowReport(false); // Show SelectToken when Back is clicked
  };

  return (
    <div className="h-screen bg-cover bg-center bricolage-font pb-6 bg-custom-bg jost">
      <div className=" p-3 space-y-5">
        <img className="w-[250px] h-[50px] mx-auto" src={Assets.QuillCheckLogo} alt="Quill Check Logo" />

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
              <SelectToken onCheckClick={handleCheckClick} />
            </motion.div>
          ) : (
            <motion.div
              key="evaluate-report"
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -180 }}
              transition={{ duration: 0.6 }}
            >
              <EvaluateReport onBackClick={handleBackClick} />
            </motion.div>
          )}
        </AnimatePresence>

        <p className="flex justify-center text-white text-lg font-light">
          Powered by <img className="h-5 pl-2" src={Assets.QuillAI} alt="QuillAI" />
        </p>
      </div>
    </div>
  );
};

export default App;
