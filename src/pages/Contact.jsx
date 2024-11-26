import React from 'react';

const Contact = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">Contact Us</h1>
      <p className="text-lg mb-5">
        Have questions or feedback? We'd love to hear from you! Reach out to us via the details below:
      </p>
      <ul className="text-lg">
        <li>Email: <a href="mailto:support@bookvault.com" className="text-blue-500">support@bookvault.com</a></li>
        <li>Phone: +1-234-567-890</li>
        <li>Address: 123 Book Vault Lane, Library City, BK 56789</li>
      </ul>
    </div>
  );
};

export default Contact;
