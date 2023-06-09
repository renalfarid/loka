import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { useState } from "react";

const Registrasi = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const form = {
      name,
      email,
      phone,
      message
    };

    try {
      const rawResponse = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!rawResponse.ok) {
        throw new Error('Request failed with status ' + rawResponse.status);
      }

      const content = await rawResponse.json();

      // Print to screen
      alert(content.data.tableRange);

      // Reset the form fields
      setMessage('');
      setPhone('');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <SeoHead title='Registrasi - Loka Academy' />
      <Layout>
        <div className="max-w-5xl mx-auto py-16">
          <form className="py-4 space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Name" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Email" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="phone" className="sr-only">Phone</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Phone" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Message" />
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-600">Save</button>
                    </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Registrasi;
