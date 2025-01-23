import PropTypes from "prop-types";

function ContactButton(props) {
  const handleScroll = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      className="border rounded-xl p-2 px-4 text-sm font-extralight shadow-md shadow-transparent hover:-translate-y-1 hover:shadow-neutral-500 transition-all duration-300 border-neutral-500"
      onClick={handleScroll}
    >
      {props.title}
    </button>
  );
}

ContactButton.propTypes = {
  title: PropTypes.string,
};

export default ContactButton;
