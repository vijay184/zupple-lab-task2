import React from "react";
import RedArrow from "./RedArrow";
import GreenArrow from "./GreenArrow";
import BlackWhiteArrow from "./BlackWhiteArrow";
const Block_pagination = () => {
  return (
    <div>
      <div className="block-transcation-id">
        <p className="block-id">
          18f75452814dec66956b3a85afa74926dba803bfe586caa3ef04bac6b32d102d
        </p>
        <p className="block-datetime">23-1-2021 08:37</p>
      </div>
      <div className="block-coinbase">
        <div className="coin-base-left">
          <p className="coin-base-left-upper-text">
            <div className="top-blackwhite-arrow">
              {" "}
              <span>
                <BlackWhiteArrow />
              </span>
            </div>{" "}
            Coinbase (Newly Generated Coins)
          </p>
          <p className="coin-base-left-below-text">
            )'bj/SpiderPoolu1/4mmBmR 4Cb$& ghgy%%%
          </p>
        </div>
        <div className="coin-base-right">
          <div className="coins-base-right-left">
            <p className="color">125m2H43pwKpSZjLhMQHneuTwTjN5qRyYu</p>
            <p>OP_RETURN "!@#$%^&*=*&^%35343fgggf%</p>
            <p>OP_RETURN RSKBLOCK:j_* ^&| \m[]/yd6QWI T% 4</p>
            <p>OP_RETURN '4 m pa?eO>de" ttt6&^% L""</p>
          </div>
          <div className="coin-base-right-right">
            <div className="arrow-div">
              <p className="green-arrow1">6.67966301 BTC </p>
              <span className="arrow">
                <GreenArrow />
              </span>
            </div>
            <div className="arrow-div">
              <p className="green-arrow1">0.00000000 BTC </p>
              <span className="arrow3">
                <BlackWhiteArrow />
              </span>
            </div>
            <div className="arrow-div">
              <p className="green-arrow1">0.00000000 BTC </p>
              <span className="arrow3">
                <BlackWhiteArrow />
              </span>
            </div>
            <div className="arrow-div">
              <p className="green-arrow1">0.00000000 BTC </p>
              <span className="arrow3">
                <BlackWhiteArrow />
              </span>
            </div>
            <div className="bitcoin-sum">6.67966301 BTC</div>
          </div>
        </div>
      </div>
      <div className="block-transcation-id1">
        <p className="block-id">
          &1a37623a25d8c8b2c2517f90cbc9ab1e9c27d189da60d9dc054bcda36b89410
        </p>
        <p className="block-datetime">23-1-2021 08:37</p>
      </div>

      <div className="red-arrow-box1">
        <div className="coin-base-left">
          <p className="coin-base-left-upper-text1">
            <div className="top-blackwhite-arrow">
              <span className="arrow1">
                <RedArrow />
              </span>
            </div>
            bc1qpcr2ccs0972pr....xp8pyc3jt4lpfqcjlk
          </p>
          <p className="coin-base-left-below-text">
            623.1 sat/vB-68,232 sat(<span className="colors">$21.77</span>)
          </p>
        </div>
        <div className="BTC">0.00078228 BTC</div>
        <div className="coin-base-right">
          <div className="coins-base-right-left">
            <p className="color">bc1q4fdqv7z8mqk73...dxnzw675320gjar6xx</p>
          </div>
          <div className="coin-base-right-right">
            <div className="arrow-div">
              <p className="green-arrow1">0.00009996 BTC </p>
              <span className="arrow">
                <GreenArrow />
              </span>
            </div>

            <div className="bitcoin-sum">0.00009996 BTC </div>
          </div>
        </div>
      </div>
      <div className="block-transcation-id1">
        <p className="block-id">
          c9940359dd3b45356dc4b0e2a55c75031da2a7be9378520127b5b92cab128d16
        </p>
        <p className="block-datetime">23-1-2021 08:37</p>
      </div>
      <div className="red-arrow-box1">
        <div className="coin-base-left">
          <p className="coin-base-left-upper-text">
            <div className="top-blackwhite-arrow">
              <span className="arrow1">
                <RedArrow />
              </span>
            </div>
            bc1qpcr2css0972pr...xp8pyc3jt4lpfqcjlk
          </p>
          <div className="yellow-rectangle-box ">multisig 2 of 3</div>

          <p className="coin-base-left-below-text">
            470.0 sat/vB-90,000 sat (<span className="colors">$28.72</span>)
          </p>
        </div>
        <div className="BTC">0.02355332 BTC</div>
        <div className="coin-base-right">
          <div className="coins-base-right-left">
            <p className="color">14qKs3QrAatRCoG3v79At4dFMZBG4Ham64</p>
            <p className="color">bc1qwqdg6squsna38...cc7kytlcckxswvvzej</p>
          </div>
          <div className="coin-base-right-right">
            <div className="arrow-div1">
              <p className="red-arrow-box-value">
                0.01080726 BTC{" "}
                <span className="arrow4">
                  <GreenArrow />
                </span>
              </p>
            </div>

            <div className="arrow-div2">
              <p className="red-arrow-box-value">
                0.01184606 BTC{" "}
                <span className="arrow5">
                  <RedArrow />
                </span>{" "}
              </p>
            </div>
            <div className="bitcoin-sum">0.02265332 BTC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block_pagination;
