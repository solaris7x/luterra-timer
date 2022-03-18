import { useEffect, useState } from "react";
import resetTimes from "../functions/resetTimes";

const Timer = () => {
  // State for the timer
  const [resetETA, setResetETA] = useState(resetTimes());

  // Set inverval to run every second
  useEffect(() => {
    const interval = setInterval(() => setResetETA(resetTimes()), 1000);
    // Clear interval when component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Destructure the state
  const { dailyResetETA, weeklyResetETA } = resetETA;

  return (
    <>
      <div className="mt-[10%] text-4xl text-white text-center">
        Daily Reset in
      </div>
      <div className="text-7xl my-4 text-white text-center font-herobeam">
        {dailyResetETA}
      </div>
      <div className="mt-12 text-4xl text-white text-center">
        Weekly Reset in
      </div>
      <div className="text-7xl my-4 text-white text-center font-herobeam">
        {weeklyResetETA}
      </div>
    </>
  );
};
export default Timer;
