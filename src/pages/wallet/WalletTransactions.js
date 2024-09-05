import React,{useState,useEffect}from "react";
import "./WalletTransactions.scss";
import ReactPaginate from "react-paginate";

const WalletTransactions = ({ transactions, user }) => {

    //   Begin Pagination
    const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(transactions.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(transactions.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, transactions]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % transactions.length;
    setItemOffset(newOffset);
  };
  //   End Pagination

  return (
    <div className="wallet-transactions">
      <hr />
      <br />
      <h3>Transactions</h3>
      <div className={"table"}>
        {transactions.length === 0 ? (
          <p>No order found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Ref Account</th>
                <th>Description</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => {
                const {
                  _id,
                  createdAt,
                  amount,
                  sender,
                  receiver,
                  ref_acc,
                  description,
                  status,
                } = transaction;
                return (
                  <tr key={_id}>
                    <td>{itemOffset + index + 1}</td>
                    <td>{createdAt}</td>
                    <td>{_id}</td>
                    <td>
                      {"$"}
                      {amount}
                    </td>
                    <td>{sender === user.email ? "Debit" : "Credit"}</td>
                    <td>{sender === user.email ? receiver : sender}</td>
                    <td>{description}</td>
                    <td>{status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="activePage"
      />
    </div>
  );
};

export default WalletTransactions;
