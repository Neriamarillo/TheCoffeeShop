function Message(props) {
  return (
    <div className="message">
      <h3>{props.children}</h3>
    </div>
  );
}

export default Message;
