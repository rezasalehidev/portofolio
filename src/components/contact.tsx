import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import type { ContactData } from "../types/portfolio";
import SpecularButton from "./react-bits/specular-button";

interface ContactProps {
  data?: ContactData;
}

type FormStatus = "idle" | "sending" | "success" | "error";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_FORM: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY ?? "";

const isEmailjsConfigured = (): boolean =>
  Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export const Contact = ({ data }: ContactProps): JSX.Element => {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event: {
    target: { name: string; value: string };
  }): void => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event: {
    preventDefault: () => void;
  }): Promise<void> => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setFeedback("Please fill in your name, email, and message.");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    if (!isEmailjsConfigured()) {
      setStatus("error");
      setFeedback(
        "Email service is not configured yet. Please set EmailJS keys in .env."
      );
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      setFeedback("Thanks! Your message was sent successfully.");
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus("error");
      setFeedback("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <>
      <div id="message" className="contact-form-section">
        <div className="container">
          <div className="section-title text-center" data-aos="fade-up">
            <h2>Contact</h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Send a message and I will get back to you as soon as I can.
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-delay="150"
            noValidate
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    autoComplete="name"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="form-control"
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                disabled={status === "sending"}
                required
              />
            </div>

            {feedback ? (
              <p
                className={`contact-feedback${
                  status === "success" ? " is-success" : " is-error"
                }`}
                role="status"
              >
                {feedback}
              </p>
            ) : null}

            <div className="contact-submit-wrap">
              <SpecularButton
                type="submit"
                size="md"
                radius={25}
                disabled={status === "sending"}
                textColor="#ffffff"
                lineColor="#5ca9fb"
                baseColor="#6372ff"
                tint="#6372ff"
                tintOpacity={0.85}
                blur={4}
                intensity={1.1}
                autoAnimate
                className="contact-specular-btn"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </SpecularButton>
            </div>
          </form>
        </div>
      </div>

      <div id="contact">
        <div className="container">
          <div className="section-title text-center" data-aos="fade-up">
            <h2>Get in touch</h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Feel free to reach out for collaborations or opportunities.
            </p>
          </div>

          <div className="row contact-row">
            <div
              className="col-xs-12 col-sm-6 contact-info"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <div className="contact-item">
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                <p>{data?.address ?? "loading"}</p>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 contact-info"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="contact-item">
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                <p>
                  {data?.email ? (
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                  ) : (
                    "loading"
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="social" data-aos="zoom-in" data-aos-delay="250">
            <ul>
              <li>
                <a
                  href={data?.Github ?? "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href={data?.linkedin ?? "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
