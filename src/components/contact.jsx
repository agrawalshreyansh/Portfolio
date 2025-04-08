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
    <div className="relative flex size-full min-h-screen flex-col bg-[#dad7cd] group/design-root overflow-hidden text-[#1d2923]" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-24 flex flex-1 justify-center py-12">
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
              <div className="flex px-4 py-3 justify-end ">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1469c0] transition-colors ${isSubmitting ? 'bg-[#1980e6]/70' : 'bg-[#1980e6]'
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


            <p className="text-[#637588] text-sm font-normal leading-normal pb-3 pt-1 px-4">Or find me elsewhere:</p>
            <div className="flex gap-3 p-3 flex-wrap pr-4 cursor-pointer">
              <a href="https://github.com/agrawalshreyansh" target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-x-2 rounded-full bg-[#f0f2f4]  hover:bg-[#e0e2e4] transition-colors ">
                <button><img src='github.svg' className='h-12 cursor-pointer' /></button>
              </a>
              <a href="https://www.linkedin.com/in/shreyansh-agrawal-695289203/" target="_blank" rel="noopener noreferrer" className="flex h-8 items-center justify-center gap-x-2 rounded-xl">
                <button><img src='linkedin.svg' className='h-14 mt-4 ml-6 cursor-pointer' /></button>
              </a>
              <a href="https://www.youtube.com/@shreyansh_agrawal" target="_blank" rel="noopener noreferrer" className="flex h-8 items-center justify-center gap-x-2 rounded-xlhover:bg-[#e0e2e4] transition-colors">
                <button><img src='youtube.png' className='h-20 mt-4 ml-2 cursor-pointer' /></button>
              </a>
              <a href="https://www.instagram.com/lifewithshrage" target="_blank" rel="noopener noreferrer" className="flex h-8 items-center justify-center gap-x-2 rounded-xlhover:bg-[#e0e2e4] transition-colors">
                <button><img src='instagram.png' className='h-20 mt-4 cursor-pointer' /></button>
              </a>
              <a href="https://leetcode.com/u/Shrage/" target="_blank" rel="noopener noreferrer" className="flex h-8 items-center justify-center gap-x-2 rounded-xlhover:bg-[#e0e2e4] transition-colors">
                <button>
                  <svg
                    className="leetcode h-full w-auto max-w-none mt-3 ml-2 cursor-pointer"
                    width="3rem"
                    height="3rem"
                    viewBox="0 0 95 111"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
                      fill="#FFA116"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                      fill="#B3B3B3"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                      fill="black"
                    />
                  </svg>

                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;