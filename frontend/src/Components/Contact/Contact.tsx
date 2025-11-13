import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const email = (form.querySelector("#email") as HTMLInputElement).value;
    const phone = (form.querySelector("#phone") as HTMLInputElement).value;
    const message = (form.querySelector("#message") as HTMLTextAreaElement).value;

    if (!email || !phone || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const templateParams = { email, phone, message };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.reset();
        },
        (error: any) => {
          alert("Failed to send message. Please try again later.");
          console.error(error);
        }
      );
  };

  const sendWhatsApp = () => {
    const form = formRef.current;
    if (!form) return;

    const email = (form.querySelector("#email") as HTMLInputElement).value;
    const phone = (form.querySelector("#phone") as HTMLInputElement).value;
    const message = (form.querySelector("#message") as HTMLTextAreaElement).value;

    if (!email || !phone || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const whatsappMessage = `Hello, my details are:\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/254718146250?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-box">
        <h2 className="contact-title">Get In Touch</h2>
        <form id="contact-form" ref={formRef} onSubmit={sendEmail}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <div className="button-container">
            <button type="submit" className="contact-btn">
              Email
            </button>
            <button
              type="button"
              id="whatsapp-btn"
              className="contact-btn"
              onClick={sendWhatsApp}
            >
              WhatsApp <i className="bx bxl-whatsapp"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
