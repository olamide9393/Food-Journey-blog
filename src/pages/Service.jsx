import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Terms of Service</h1>
        <h3>Agreement to Terms</h3>
        <p>
          By using The Food Journey Blog and any associated services, you agree
          to be bound by these Terms of Service. If you do not agree to these
          terms, please do not use our website.
        </p>
        <h3>User Content</h3>
        <p>
          Our website allows you to post, link, store, share, and otherwise make
          available certain information, text, graphics, videos, or other
          material. You are responsible for this content and must ensure it
          complies with our guidelines.
        </p>
        <h3>Privacy Policy</h3>
        <p>
          Your use of The Food Journey Blog is also governed by our Privacy
          Policy, which can be found at{" "}
          <Link to="/Privacy & policy">Privacy & policy</Link> By using our
          website, you consent to the practices described in the Privacy Policy.
        </p>

        <h3>Intellectual Property</h3>
        <p>
          The Food Journey Blog and its original content, features, and
          functionality are and will remain the exclusive property of [Your
          Name] and its licensors. The website is protected by copyright,
          trademark, and other laws.
        </p>
        <h3>Termination</h3>
        <p>
          We may terminate or suspend your account and access to our services
          without prior notice if you breach these Terms of Service.
        </p>

        <h3>Changes to Terms of Service</h3>
        <p>
          We reserve the right to modify or replace these Terms of Service at
          any time. Any changes will be effective immediately upon posting. Your
          continued use of our website after such changes constitutes your
          acceptance of the new terms.
        </p>
      </div>
    </div>
  );
};

export default Service;
