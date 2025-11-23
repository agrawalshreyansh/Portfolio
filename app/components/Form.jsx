import React, { useState } from 'react'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });
        if (res.ok) {
            setToast({ show: true, message: 'Message sent successfully!', type: 'success' });
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setToast({ show: true, message: 'Something went wrong. Please try again.', type: 'error' });
        }
        setLoading(false);
        setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
    };

    return (
        <section className="my-28 fade-in fade-in-delay-4" id="contact">
            <h3 className="text-2xl font-bold text-text-primary mb-4"> </h3>
            <h2 className="text-[84px] font-black text-white mb-8 leading-20">LET&apos;S WORK<br></br><span className='text-[#444444]'>TOGETHER
            </span></h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="text-xs text-[#a4a6aa]">Name</label>
                    <input id="name" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 bg-bg-secondary rounded-lg text-[#a4a6aa] border-1 border-transparent focus:border-text-primary focus:outline-none" />
                </div>
                <div>
                    <label htmlFor="email" className="text-xs text-[#a4a6aa]">Email</label>
                    <input id="email" type="email" placeholder="Your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 bg-bg-secondary rounded-lg text-[#a4a6aa] border-1 border-transparent focus:border-text-primary focus:outline-none" />
                </div>
                <div>
                    <label htmlFor="message" className="text-xs text-[#a4a6aa]">Message</label>
                    <textarea id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 bg-bg-secondary rounded-lg text-[#a4a6aa] border-1 border-transparent focus:border-text-primary focus:outline-none" rows="4"></textarea>
                </div>
                <button type="submit" disabled={loading} className="bg-text-primary w-full text-bg-primary px-4 py-2  rounded-lg hover:bg-text-secondary disabled:opacity-50">{loading ? 'Sending your message' : 'Send Message'}</button>
            </form>
            {toast.show && (
                <div className={`fixed bottom-4 right-4 p-4 rounded-lg text-white ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                    {toast.message}
                </div>
            )}
        </section>
    )
}

export default ContactForm