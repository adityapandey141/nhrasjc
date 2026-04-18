import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Heart,
  Users,
  Handshake,
  HelpCircle,
} from "lucide-react";

const inquiryTypes = [
  {
    id: "donate",
    label: "Donate Now",
    icon: Heart,
    description: "Support our cause financially",
  },
  {
    id: "volunteer",
    label: "Become a Volunteer",
    icon: Users,
    description: "Join our team of changemakers",
  },
  {
    id: "partner",
    label: "Partner With Us",
    icon: Handshake,
    description: "Collaborate on initiatives",
  },
  {
    id: "general",
    label: "General Inquiry",
    icon: HelpCircle,
    description: "Other questions or feedback",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquirySelect = (type) => {
    setFormData((prev) => ({ ...prev, inquiryType: type }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "9b05202a-798b-4cd7-af32-9bd0640d28e0", // Replace with actual key
          from_name: "NHRSJWF Website",
          subject: `[${formData.inquiryType.toUpperCase()}] ${formData.subject || "New Contact Form Submission"}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          inquiry_type: formData.inquiryType,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.message || "Failed to send message. Please try again.",
      );
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-purple-700 via-red-600 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Get in touch with us. We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-purple-700" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                B-7, Khwaja Moinuddin Nagar,
                <br />
                Opp. Basera Duplex, Tandalja,
                <br />
                Vadodara - 390012
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-red-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">
                +91 XXXXX XXXXX
                <br />
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-orange-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">nhrascnational@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-green-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Working Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon - Sat: 10:00 AM - 6:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
                Get In Touch
              </span>
              <h2 className="section-title mt-2">Send Us a Message</h2>
              <p className="section-subtitle mt-4">
                Whether you want to donate, volunteer, partner with us, or have
                any questions - we're here to help!
              </p>
            </div>

            {/* Inquiry Type Selection */}
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-4">
                What would you like to do?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {inquiryTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleInquirySelect(type.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      formData.inquiryType === type.id
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300 bg-white"
                    }`}
                  >
                    <type.icon
                      size={28}
                      className={
                        formData.inquiryType === type.id
                          ? "text-purple-600"
                          : "text-gray-400"
                      }
                    />
                    <h4
                      className={`font-semibold mt-2 text-sm ${
                        formData.inquiryType === type.id
                          ? "text-purple-700"
                          : "text-gray-700"
                      }`}
                    >
                      {type.label}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {type.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-2xl p-8"
            >
              {status === "success" && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg flex items-center gap-3">
                  <AlertCircle size={20} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="Enter subject"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={status === "loading" || !formData.inquiryType}
                  className="w-full md:w-auto btn-gradient flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169073398441!2d73.16445731495513!3d22.309460985315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5855555555%3A0x5555555555555555!2sTandalja%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="NHRSJWF Location"
        />
      </section>
    </div>
  );
};

export default Contact;
