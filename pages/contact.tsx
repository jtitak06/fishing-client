import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <>
      <Head>
        <title>Contact | Cast Legend</title>
        <meta
          name="description"
          content="Your digital hub for all things fishing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Cast Legend" />
        <meta
          property="og:description"
          content="This is the home page description"
        />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://castlegend.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cast Legend" />
        <meta
          name="twitter:description"
          content="Your digital hub for all things fishing."
        />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        {/* Centered title, "Cast Legend", placed midway between the navbar and form */}
        <h2 className="text-2xl font-bold mb-8 text-center">Cast Legend</h2>

        {/* Contact form container */}
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-lg w-full">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-xl font-semibold text-center">Contact Us</h1>
            <p className="text-center text-gray-600 mt-2">
              We'd love to hear from you! Fill out the form below and we'll get
              in touch as soon as possible.
            </p>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
