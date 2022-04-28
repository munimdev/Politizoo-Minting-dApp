import { useState, useEffect } from "react";
import "./App.css";
import SVG from "./components/SVG";

import "react-toastify/dist/ReactToastify.css";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import Wallet from "./components/Wallet";

function App() {
  if (typeof window.ethereum === "undefined") {
    alert("Please install Metamask in your browser!");
    window.location = "https://metamask.io/download/";
  }

  const [randomWallet, setRandomWallet] = useState(null);
  const [increm, setIncm] = useState(332);

  return (
    <>
      <div className="App1 container-fluid">
        <div className="w_set index0  mint-card__container">
          {/* svg */}
          <SVG />

          {/* svg */}

          <div className="row mt_screen justify-content-between">
            {/*  left div start */}
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 130 }}
              className="col-md-6 mint-card__container feed-post"
            >
              <div className="col-12 px-2 inner_div">
                <div className=" d-flex flex-column align-items-center pading_9 ">
                  <p className="primary_color font-400">Limited Mint</p>

                  <img className="img2 mx-auto" src="assets/nft.gif" alt="" />

                  <h2 className="cus_style1 margin_78 mt-4 font_custom">
                    Mint Yours Now
                  </h2>

                  {/*component wallet */}
                  <Wallet increm={increm} />
                  {/*component wallet */}

                  <h5 className="font_custom">Fair Distribution</h5>
                </div>
              </div>
            </motion.div>
            {/*  left div end */}

            {/* right div start */}

            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 30 }}
              transition={{ delay: 1.3, type: "spring", stiffness: 30 }}
              className="col-md-5 w_cus90 ps-md-3 d-flex flex-column align-md-items-center justify-content-center"
            >
              <div className="div">
                <h2 className="font-900 font_custom minus_marg">
                  Limited Mint
                </h2>
                <div>
                  <p className="text3f "> MARCH 3</p>
                  <h4 className="m-0 font_21">Limited Mint</h4>
                  <h5 className="mb-3 font_18">
                    March <span>3</span>-<span>9am EST</span>
                  </h5>
                </div>

                <div>
                  <h5 className="m-0 font_21">Supply</h5>
                  <p className="p-0 font_18">1111</p>
                </div>

                <div>
                  <h5 className="m-0 font_21">Price</h5>
                  <p className="p-0 font_18">0.15 ETH</p>
                </div>

                <div>
                  <h5 className="m-0 font_21">Max</h5>
                  <p className="p-0 font_18">5 per Wallet</p>
                </div>

                <div className="mar_k">
                  <a href="" className="my__btn ">
                    Join our Discord
                    <svg
                      style={{ marginLeft: 4 }}
                      width="31"
                      height="24"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M38.1863 13.7599C35.5913 11.5656 32.4773 10.4685 29.1902 10.2856L28.6712 10.8342C31.6123 11.5656 34.2073 13.0285 36.6293 15.0399C33.6883 13.3942 30.4013 12.2971 26.9412 11.9314C25.9032 11.7485 25.0382 11.7485 24.0002 11.7485C22.9622 11.7485 22.0972 11.7485 21.0592 11.9314C17.5992 12.2971 14.3121 13.3942 11.3711 15.0399C13.7931 13.0285 16.3882 11.5656 19.3292 10.8342L18.8102 10.2856C15.5231 10.4685 12.4091 11.5656 9.8141 13.7599C6.87308 19.6114 5.31607 26.1942 5.14307 32.9599C7.73809 35.8856 11.3711 37.7142 15.1771 37.7142C15.1771 37.7142 16.3882 36.2514 17.2532 34.9714C15.0041 34.4228 12.9281 33.1428 11.5441 31.1314C12.7551 31.8628 13.9661 32.5942 15.1771 33.1428C16.7342 33.8742 18.2912 34.2399 19.8482 34.6056C21.2322 34.7885 22.6162 34.9714 24.0002 34.9714C25.3842 34.9714 26.7682 34.7885 28.1522 34.6056C29.7093 34.2399 31.2663 33.8742 32.8233 33.1428C34.0343 32.5942 35.2453 31.8628 36.4563 31.1314C35.0723 33.1428 32.9963 34.4228 30.7473 34.9714C31.6123 36.2514 32.8233 37.7142 32.8233 37.7142C36.6293 37.7142 40.2623 35.8856 42.8573 32.9599C42.6843 26.1942 41.1273 19.6114 38.1863 13.7599ZM18.2912 29.6685C16.5612 29.6685 15.0041 28.0228 15.0041 26.0114C15.0041 23.9999 16.5612 22.3542 18.2912 22.3542C20.0212 22.3542 21.5782 23.9999 21.5782 26.0114C21.5782 28.0228 20.0212 29.6685 18.2912 29.6685ZM29.7093 29.6685C27.9792 29.6685 26.4222 28.0228 26.4222 26.0114C26.4222 23.9999 27.9792 22.3542 29.7093 22.3542C31.4393 22.3542 32.9963 23.9999 32.9963 26.0114C32.9963 28.0228 31.4393 29.6685 29.7093 29.6685Z" />
                    </svg>
                  </a>
                </div>

                <div className="mar_j">
                  <a href="" className="my__btn">
                    Join out telegram
                    <svg
                      style={{ marginLeft: 7, width: "19px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-telegram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
