const Button = (props) => {
  const { className, button_text } = props;
  return <button className={className}>{button_text}</button>;
};

const element = (
  <div className="bg-cont">
    <h1 className="header">Social Buttons</h1>
    <div className="buttons-cont">
      <Button className="like" button_text="Like" />
      <Button className="comment" button_text="Comment" />
      <Button className="share" button_text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
