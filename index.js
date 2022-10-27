const Button = (props) => {
  const { button, btn } = props;
  return <button className={btn}>{button}</button>;
};

const element = (
  <div className="social-buttons-bg">
    <h1 className="buttons-heading">Social Buttons</h1>
    <div className="buttons-card">
      <Button button="Like" btn="btn1" />
      <Button button="Comment" btn="btn2" />
      <Button button="Share" btn="btn3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
