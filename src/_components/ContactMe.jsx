import ContactButton from "./ContactButton";
import { useForm, ValidationError } from "@formspree/react";

function ContactMe() {
  const [state, handleSubmit] = useForm("mvgonezb");

  if (state.succeeded) {
    return (
      <div className="py-12 px-6">
        <div className="max-w-3xl mx-auto border rounded-xl border-neutral-600 shadow-md p-8">
          <h2 className="text-2xl font-extralight mb-6 text-center">
            Merci pour votre message !
          </h2>
          <p className="text-center">Je vous répondrai dès que possible.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-6">
      <div className="max-w-3xl mx-auto border rounded-xl border-neutral-600 shadow-md p-8">
        <h2 className="text-2xl font-extralight mb-6 text-center">
          Contactez-moi
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nom */}
          <div>
            <label htmlFor="name" className="block font-light">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full mt-1 px-4 py-2 border bg-transparent border-neutral-600 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none shadow-xl"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-light">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 px-4 py-2 border bg-transparent border-neutral-600 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none shadow-xl"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Sujet */}
          <div>
            <label htmlFor="subject" className="block font-light">
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full mt-1 px-4 py-2 border bg-transparent border-neutral-600 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none shadow-xl"
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-light">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full mt-1 px-4 py-2 border bg-transparent border-neutral-600 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none shadow-2xl resize-none"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Bouton */}
          <div className="text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="px-6 py-2 text-white rounded-md focus:ring-2 focus:ring-gray-600 focus:outline-none"
            >
              <ContactButton title={"Envoyer"} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
