import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { detailsOrder } from "../actions/orderActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
import currencyFormat from "../helpers/utils";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";

function Confirmation(props) {
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);

  const today = new Date(Date.now()).toLocaleDateString();

  return loading ? (
    <Loading />
  ) : error ? (
    <Message>{error}</Message>
  ) : (
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-md-8">
        <div className="card rounded shadow-sm">
          <div className="text-left receiptBrand p-3 px-5">
            <h2>
              <FiCoffee /> The Coffee Shop
            </h2>
          </div>
          <div className="invoice p-5">
            <h5>Order Confirmed!</h5>{" "}
            <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <div className="py-2">
                        <span className="d-block text-muted">Order Date</span>
                        <span>{today}</span>
                      </div>
                    </td>
                    <td>
                      <div className="py-2">
                        <span className="d-block text-muted">Order No</span>
                        <span>{order._id}</span>
                      </div>
                    </td>
                    <td>
                      <div className="py-2">
                        <span className="d-block text-muted">
                          Shiping Address
                        </span>
                        <span>123 CBA Road, TX,USA</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="product border-bottom table-responsive">
              <table className="table table-borderless">
                <tbody>
                  {order.orderItems.map((item) => {
                    return (
                      <tr>
                        <td width="80%">
                          <span className="font-weight-bold">{item.name}</span>
                          <div className="product-qty">
                            <span className="d-block">Qty: {item.qty}</span>
                          </div>
                        </td>
                        <td width="20%">
                          <div className="float-end">
                            {" "}
                            <span className="font-weight-bold">
                              {currencyFormat(item.price)}
                            </span>{" "}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="row d-flex justify-content-end">
              <div className="col-md-5">
                <table className="table table-borderless">
                  <tbody className="totals">
                    <tr>
                      <td>
                        <div className="text-left">
                          {" "}
                          <span className="text-muted">Subtotal</span>{" "}
                        </div>
                      </td>
                      <td>
                        <div className="float-end">
                          {" "}
                          <span>{currencyFormat(order.itemsPrice)}</span>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="float-start">
                          {" "}
                          <span className="text-muted">Shipping Fee</span>{" "}
                        </div>
                      </td>
                      <td>
                        <div className="float-end">
                          {" "}
                          <span>Free</span>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="float-start">
                          {" "}
                          <span className="text-muted">Sales Tax</span>{" "}
                        </div>
                      </td>
                      <td>
                        <div className="float-end">
                          {" "}
                          <span>{currencyFormat(order.taxPrice)}</span>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr className="border-top border-bottom">
                      <td>
                        <div className="float-start">
                          {" "}
                          <span className="font-weight-bold">Total</span>{" "}
                        </div>
                      </td>
                      <td>
                        <div className="float-end">
                          {" "}
                          <span className="font-weight-bold">
                            {currencyFormat(order.totalPrice)}
                          </span>{" "}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="font-weight-bold mb-0">
              Thank you for shopping with us!
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Link to="/products">
          <Button className="shadow">Back to Products</Button>
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;
