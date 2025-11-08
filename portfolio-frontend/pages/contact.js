import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <ContactForm />
        <div className="card">
          <h3 className="font-semibold">Other ways to reach me</h3>
          <p className="mt-2 text-gray-600">
            Email:{" "}
            <a
              href="mailto:saikiranasamwar@gmail.com"
              className="text-accent"
            >
              saikiranasamwar@gmail.com
            </a>
          </p>
          <p className="mt-2 text-gray-600">
            Location: Pune, Maharashtra, India
          </p>
          <p className="mt-4 text-gray-600">
            LinkedIn / GitHub links — add your profile links here.
          </p>
        </div>
      </div>
    </section>
  );
}
