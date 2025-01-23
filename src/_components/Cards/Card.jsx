function Card(props) {
  return (
    <div className="bg-neutral-700/30 border p-4 border-neutral-600 rounded-md gap-2 flex flex-col">
      <h1 className="text-center mb-4 underline text-lg font-extralight">{props.title}</h1>
      {props.children}
    </div>
  );
}

export default Card;
