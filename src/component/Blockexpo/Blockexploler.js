import React, { useState } from "react";
import "./styles.css";
import Pagination from "./Pagination";
import Block_pagination from "./Block_pagination";

function Forms() {
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    // Handle the page change logic, e.g., fetching data for the new page
    console.log(`Page changed to ${page}`);
    setCurrentPage(page);
    const delay = 500; // Set your desired delay in milliseconds (e.g., 2000ms = 2 seconds)
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);
  };

  return (
    <div>
      <div className="bluebox-upper-value-container">
        <div className="bluebox-upper-value">6758748</div>
        <div className="bluebox-upper-value1">6758748</div>
        <div className="bluebox-upper-value2">6758748</div>
        <div className="bluebox-upper-value3">6758748</div>
      </div>
      <div className="container">
        {/* Gold Boxes */}
        <div className="box gold">
          <div className="sm-txt">~9 sat/vB</div>
          <div className="sm-txt">9 - 10 sat/vB</div>
          <div className="md-txt">1.21 MB</div>
          <div className="sm-txt">1,680 transactions</div>
          <div className="sm-txt">In ~40 minutes</div>
          <div className="bottom-left-div"></div>
          <div className="top-right-div"></div>
          <div className="top-left-line"></div>
          <div className="box-behind"></div>
        </div>
        <div className="box gold ">
          <div className="sm-txt">~10 sat/vB</div>
          <div className="sm-txt">10 - 10 sat/vB</div>
          <div className="md-txt">1.31 MB</div>
          <div className="sm-txt">929 transactions</div>
          <div className="sm-txt">In ~30 minutes</div>
          <div className="box-behind"></div>
          <div className="bottom-left-div"></div>
          <div className="top-left-line"></div>
          <div className="top-right-div"></div>
        </div>
        <div className="box gold">
          <div className="sm-txt">~11 sat/vB</div>
          <div className="sm-txt">10 - 12 sat/vB</div>
          <div className="md-txt">1.1 MB</div>
          <div className="sm-txt">1,915 transactions</div>
          <div className="sm-txt">In ~20 minutes</div>
          <div className="box-behind"></div>
          <div className="bottom-left-div"></div>
          <div className="top-left-line"></div>
          <div className="top-right-div"></div>
        </div>
        <div className="box gold">
          <div className="sm-txt">~26 sat/vB</div>
          <div className="sm-txt">12 - 536 sat/vB</div>
          <div className="md-txt">1.41 MB</div>
          <div className="sm-txt">2182 transactions</div>
          <div className="sm-txt">In ~10 minutes</div>
          <div className="top-left-line"></div>
          <div className="box-behind"></div>
          <div className="bottom-left-div"></div>
          <div className="top-right-div"></div>
        </div>

        <div className="exclamation-column">
          <div className="exclamation-mark">|</div>
          <div className="exclamation-mark">|</div>
          <div className="exclamation-mark">|</div>
          <div className="exclamation-mark">|</div>
          <div className="exclamation-mark">|</div>
          <div className="exclamation-mark">|</div>
        </div>

        {/* Blue Boxes */}
        <div className="box blue">
          <div className="sm-txt">~80 sat/vB</div>
          <div className="sm-txt">30 - 856 sat/vB</div>
          <div className="md-txt">1.45 MB</div>
          <div className="sm-txt">2,469 transactions</div>
          <div className="top-left-line"></div>
          <div className="sm-txt">In 5 minutes</div>
          <div className="box-behind1"></div>
          <div className="bottom-left-div1"></div>
          <div className="top-right-div1"></div>
        </div>
        <div className="box blue">
          <div className="sm-txt">~12 sat/vB</div>
          <div className="sm-txt">11 - 781 sat/vB</div>
          <div className="md-txt">1.12 MB</div>
          <div className="sm-txt">2,341 transactions</div>
          <div className="sm-txt">In 22 minutes</div>
          <div className="box-behind1"></div>
          <div className="top-left-line1"></div>
          <div className="bottom-left-div1"></div>
          <div className="top-right-div1"></div>
        </div>
        <div className="box blue">
          <div className="sm-txt">~12 sat/vB</div>
          <div className="sm-txt">12 - 795 sat/vB</div>
          <div className="md-txt">1.11 MB</div>
          <div className="sm-txt">2,609 transactions</div>
          <div className="sm-txt">In 25 minutes</div>
          <div className="box-behind1"></div>
          <div className="top-left-line1"></div>
          <div className="bottom-left-div1"></div>
          <div className="top-right-div1"></div>
        </div>
        <div className="box blue">
          <div className="sm-txt">~13 sat/vB</div>
          <div className="sm-txt">13 - 348 sat/vB</div>
          <div className="md-txt">1.09 MB</div>
          <div className="top-left-line"></div>
          <div className="sm-txt">3,020 transactions</div>
          <div className="sm-txt">In 28 minutes</div>
          <div className="box-behind1"></div>
          <div className="bottom-left-div1"></div>
          <div className="top-right-div1"></div>
        </div>
      </div>

      <div className="white-box"></div>

      <div className="block-information-container">
        <div className="block-number">
          <h1>
            Block <span className="color">667306</span>
          </h1>
        </div>
        <div className="block-transaction-information">
          <div className="block-hash-timestamp-size">
            <div className="block-hash">
              <p className="hash-text">Hash</p>
              <p className="hash-value">0000000.....7c83bfa</p>
            </div>
            <div className="block-timestamp">
              <p className="timestamp-text">Timestamp</p>
              <p className="timestamp-value">2021-01-23 08:47 (1 hour ago)</p>
            </div>
            <div className="block-size">
              <p className="size-text">Size</p>
              <p className="size-value">1.39 MB</p>
            </div>
            <div className="block-weight">
              <p className="weight-text">weight</p>
              <p className="weight-value">3.99 MWU</p>
            </div>
          </div>
          <div className="block-totalfee-miner">
            <div className="block-total-fee">
              <p className="fees-text">Total Fees</p>
              <p className="fees-value">
                0.43 BTC (<span className="colors">$13,710</span>)
              </p>
            </div>
            <div className="block-subsidy">
              <p className="charges-text">Subsidy + fees</p>
              <p className="charges-value">
                6.68 BTC (<span className="colors">$213,136</span>)
              </p>
            </div>
            <div className="block-miner">
              <p className="miner-text">Miner</p>
              <p className="miner-value">
                <span className="miner-value-span">Spider Pool</span>
              </p>
            </div>
          </div>
        </div>

        {/* <div className="block-transaction-2075"> <h1 className="font">2,075 transactions</h1> </div> */}
        <div className="pagination-transaction-id-div">
          <div className="block-number1">
            <h1>2,075 transactions </h1>
          </div>
          <div className="pagination-div">
            {" "}
            <Pagination totalPages={5} onPageChange={handlePageChange} />
          </div>
        </div>
        {!isLoading && <Block_pagination />}
      </div>
    </div>
  );
}

export default Forms;
