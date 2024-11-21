import React from "react";
import { Form, Input, Button } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactPage.css";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  const onFinish = (values) => {
    console.log("Form Submitted:", values);

    // Display toast notification
    toast.success("We've received your message. Thank you!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="contact-page">
                  <Helmet>
      <title>Contact Us | Onthir</title>
          <meta name="description" content="Feel Free to contact us and share your creative thoughts." />
      </Helmet>
      <div className="contact-container">
        {/* Page Title */}
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-intro">
            Have questions or need help? Reach out to us!
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-section">
          <Form layout="vertical" onFinish={onFinish}>
            {/* Name Field */}
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>

            {/* Email Field */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Please enter a valid email",
                },
                { required: true, message: "Please enter your email" },
              ]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>

            {/* Message Field */}
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea placeholder="Your Message" rows={4} />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="submit-button">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
