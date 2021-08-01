import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Message(props) {
  switch (props.type) {
    case "login":
      return (
        <div className="message">
          <h3>{props.children}</h3>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      );

    default:
      return (
        <div className="message">
          <h3>{props.children}</h3>
        </div>
      );
  }
}

export default Message;
