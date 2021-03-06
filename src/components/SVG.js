import React from "react";
import { motion } from "framer-motion";

function SVG() {
  return (
    <>
      {/* svg */}
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ delay: 0, type: "spring", stiffness: 120 }}
        className="arrow-svg w-embed"
      >
        <svg
          className="postion_arrow"
          width="187"
          height="106"
          color="#ed0505"
          id="ade87f52-0ac0-438e-bc39-231b0e93f8ea"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 301.03 170.89"
        >
          <path
            d="M-65.06,145.38a3.24,3.24,0,0,1-.69-1.22c-1-2.51.36-5.44.93-8A91.87,91.87,0,0,0-62.95,120c.1-2.24.21-5.2,2.26-6,1.43-.56,2.48.15,3.23,1.55s.61,3.27.6,4.83c0,3.87-.59,9.52-.94,13.58a.16.16,0,0,0,.28.13,58.6,58.6,0,0,1,4.63-4.84c24.87-21.77,55.15-41.37,93.12-44C56.65,84.09,72.35,85,88.3,89.46A7.56,7.56,0,0,0,93.07,89c38.67-19.94,84.12,8.4,108.42,43.8,18.6,27.08,34.36,62.26,33.39,94-.08,2.71-1.17,28.54-5.25,26.39-.33-.17-.76-.34-.87-.78-.68-2.84.55-11.27,1-16.81a109.88,109.88,0,0,0-.49-26.19,155.25,155.25,0,0,0-11-37.11c-9.77-22.68-22.25-45.57-41.45-61.66C159.41,96,136,84.49,111,87.53c-3.44.42-9.85,2.37-13.28,5a.78.78,0,0,0,0,1.24,38.75,38.75,0,0,0,4.64,2.56,76.64,76.64,0,0,1,22.91,19.39l.68.85.67.84.83,1.06.72.94c.49.63,1,1.28,1.45,1.92q3.07,4.15,5.84,8.53c10.37,16.38,18.43,38.58,12.73,57.48-2.66,8.83-10,16.93-19.68,16.19-31.35-2.41-48.82-34.51-51.8-59.67a75.25,75.25,0,0,1,1.51-24.56,73.93,73.93,0,0,1,6.33-17c1.13-2.18,4.12-5.86,2-7.83-2.29-2.15-7.45-2.77-10.45-3.2-34.38-4.88-69.32,2.26-97.92,20.61-.6.38-1.2.78-1.8,1.17-8.68,5.74-16.44,12.78-24.26,19.77-2,1.8-4.4,4.22-5.89,5.42a.23.23,0,0,0,0,.4c4.42,1.92,10.78,2.88,15.41,3.43a10.46,10.46,0,0,1,4.92,1.5c1.43,1,2.48,3,1.69,4.49s-3.86.26-6.12.07c-6.47-.55-12.8-.37-19.28-.92C-59.95,147-62.87,147.39-65.06,145.38Zm167.38,41a55.77,55.77,0,0,0,9.32,6.87c9,5.23,22.57,8.41,29.35-1.19,6.12-8.67,4.79-22,2.42-32-3.08-13-9.52-25.19-17.41-36.07a105.17,105.17,0,0,0-9.55-11.52A79.17,79.17,0,0,0,105.1,103a57.94,57.94,0,0,0-6.38-4c-1.82-1-4.19-2.53-6.09-1.08-2.94,2.24-6,8.65-7.58,13C75.85,136.1,81.24,167.34,102.32,186.41Z"
            transform="translate(66.11 -82.42)"
            style={{ fill: "currentColor" }}
          />
        </svg>
      </motion.div>
    </>
  );
}

export default SVG;
