function ClickTracker(props) {
  return (
    <div className="card">
      <button onClick={() => props.handleClick((count) => count + 1)}>
        count is {props.count}
      </button>
      <p>This is pretty great, huh?!</p>
    </div>
  );
}

export default ClickTracker;
