'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import PageTitle from "../components/PageTitle";

type Form = { name: string; phone: string; message: string; };

export default function Contact() {
  const [form, setForm] = useState<Form>({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState<Form | null>(null);
  const router = useRouter();

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(form);           // (1) show confirmation values
    setTimeout(() => {
      router.push("/about");      // (2) go back to About page
    }, 2000);
  }

  if (submitted) {
    return (
      <section>
        <h1 className="text-2xl font-bold">Thanks!</h1>
        <p><b>Your name:</b> {submitted.name}</p>
        <p><b>Contact number:</b> {submitted.phone}</p>
        <p><b>Message:</b> {submitted.message}</p>
        <p className="text-sm opacity-70">Redirecting to About…</p>
      </section>
    );
  }

  return (
    <section>
      <PageTitle title="Contact" />
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={onSubmit} className="max-w-md card space-y-2">
        <input name="name" value={form.name} onChange={update} placeholder="Full Name" className="w-full" required />
        <input name="phone" value={form.phone} onChange={update} placeholder="Contact Number" className="w-full" required />
        <textarea name="message" value={form.message} onChange={update} placeholder="Short Message" rows={4} className="w-full" required />
        <button className="px-4 py-2 rounded bg-black text-white">Submit</button>
      </form>
    </section>
  );
}
