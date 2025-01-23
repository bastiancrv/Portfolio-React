function LinkButton(props) {
  return (
    <button
      className="border p-1 rounded-lg hover:bg-neutral-700/90 bg-neutral-700/60 transition-all duration-300 hover:-translate-y-1 shadow shadow-transparent hover:shadow-neutral-400 h-8 border-neutral-600"
      onClick={() => (window.location.href = `${props.link}`)}
    >
      {props.children}
    </button>
  );
}

export default LinkButton;
