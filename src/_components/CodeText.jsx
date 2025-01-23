function CodeText({ url, children, className }) {
  return (
    <div
      onClick={() => {
        if (url) {
          window.location.href = url;
        }
      }}
      className={`cursor-pointer border rounded-md p-0.5 bg-neutral-700/60 px-1 border-neutral-600 font-light font-mono flex items-center justify-center gap-1 hover:bg-neutral-700/90 animation-all duration-300 hover:scale-105 ${className}`}
    >
      {children}
    </div>
  );
}

export default CodeText;
