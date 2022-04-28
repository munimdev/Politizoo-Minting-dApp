import { React, useEffect, useState } from "react";
import { ethers } from "ethers";
import $ from "jquery";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(
  "wss://eth-mainnet.alchemyapi.io/v2/ifzyXSjPF_OGffl3dZHF8cqSUCDH0dbR"
);

function Wallet({ increm }) {
  const myAddress = "0xd63c61aabd59DC5D0399eBeB58627D407C019C62";

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(0.15);

  function mintNFT() {
    window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x1" }],
    });
    if (window.ethereum.networkVersion === "1") {
      web3.eth.sendTransaction({
        from: window.ethereum.selectedAddress,
        to: myAddress,
        value: web3.utils.toWei("" + amount, "ether"),
        chainID: "1",
      });
    }
  }

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Mint NFTs");
          getAccountBalance(result[0]);
          $(".mint-btn").addClass("button");
          $(".connect-btn").hide();
          $(".mint-btn").removeClass("hidden-btn");
          chainChangedHandler();
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x1" }],
    });
  };

  // listen for account changes

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountChangedHandler);
      window.ethereum.on("chainChanged", chainChangedHandler);
    }
  }, []);

  //increment decmrent by 0.15
  const increment = () => {
    if (count < 5) {
      setCount(count + 1);

      setAmount(amount + 0.15);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setAmount(amount - 0.15);
    }
  };

  return (
    <>
      <p className="primary_color my-0 font-lg">
        <span id="price">{`${parseFloat(amount).toFixed(2)} ETH`}</span>
      </p>
      <div className="input__div col-5 d-flex margin_78">
        <div className="w-100">
          <input
            type="number"
            className="input__style w-100 px-2"
            placeholder="0"
            disabled={true}
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>

        <div className="d-flex flex-column justify-content-center ">
          <button className="btn_plus" onClick={increment}>
            +
          </button>
          <button className="btn_minus" onClick={decrement}>
            -
          </button>
        </div>
      </div>
      <button className="my__btn  my-3 " onClick={connectWalletHandler}>
        {connButtonText}
      </button>
      <button className="hidden-btn btn my-3 mint-btn" onClick={mintNFT}>
        Mint NFTs
      </button>
      <p className="font_mk font-400">
        <span>{increm}</span> / <span>1111</span>
      </p>
    </>
  );
}

export default Wallet;
