import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios: npm install axios

const Contact = () => {
  const [formData, setFormData] = useState({
    my_email: "contactcode.ag@gmail.com",
    my_password: "jjeb gqfz sdrp osxo",
    name: '',
    user_email: '',
    msg: ''
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('https://shragepy.pythonanywhere.com/sendmail/', formData);

      const data = await response.json()
      if (!data.ok) {
          setSubmitStatus({
              success: true,
              message: 'Message sent successfully!'
            });
        }
      setFormData({
        my_email: "contactcode.ag@gmail.com",
        my_password: "jjeb gqfz sdrp osxo",
        name: '',
        user_email: '',
        msg: ''
      }); 
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.response?.data?.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#dad7cd] group/design-root overflow-x-hidden text-[#1d2923]" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-24 flex flex-1 justify-center py-24">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className=" tracking-light text-[32px] font-bold leading-tight">Collaborate with Me</h1>
                <p className=" text-sm font-normal leading-normal">
                  I'm always open to new opportunities and collaborations. Feel free to reach out with any questions, comments, or just to say hi.
                </p>
              </div>
            </div>

            {/* Status Message */}
            {submitStatus.message && (
              <div className={`px-4 py-2 rounded-lg mb-4 ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}

            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <span className="text-base font-medium leading-normal pb-2">Full name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl  focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <span className=" text-base font-medium leading-normal pb-2">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@smith.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <span className=" text-base font-medium leading-normal pb-2">Message</span>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl  focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none min-h-36 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex px-4 py-3 justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1469c0] transition-colors ${
                    isSubmitting ? 'bg-[#1980e6]/70' : 'bg-[#1980e6]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="truncate">Send</span>
                  )}
                </button>
              </div>
            </form>

            {/* Social Links */}
            <p className="text-[#637588] text-sm font-normal leading-normal pb-3 pt-1 px-4">Or find me elsewhere:</p>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <a href="https://github.com/agrawalshreyansh" target="_blank" rel="noopener noreferrer" className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4 hover:bg-[#e0e2e4] transition-colors">
                <span className=" text-sm font-medium leading-normal">Github</span>
              </a>
              <a href="https://www.linkedin.com/in/shreyansh-agrawal-695289203/" target="_blank" rel="noopener noreferrer" className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4 hover:bg-[#e0e2e4] transition-colors">
                <span className=" text-sm font-medium leading-normal">LinkedIn</span>
              </a>
              <a href="https://www.youtube.com/@shreyansh_agrawal" target="_blank" rel="noopener noreferrer" className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4 hover:bg-[#e0e2e4] transition-colors">
                <span className=" text-sm font-medium leading-normal">YouTube</span>
              </a>
              <a href="https://www.instagram.com/lifewithshrage" target="_blank" rel="noopener noreferrer" className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4 hover:bg-[#e0e2e4] transition-colors">
                <span className=" text-sm font-medium leading-normal">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;