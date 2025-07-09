"use client";

import { Button } from "@/components/ui/button";
// import { sendContactEmail } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    // const { error } = await sendContactEmail(formData);

    const error = "Not implemented";

    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Email sent successfully",
      });
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        className="rounded px-4 py-2"
        name="name"
        type="text"
        placeholder="Name"
      />
      <input
        className="rounded px-4 py-2"
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        className="rounded px-4 py-2"
        name="company"
        type="text"
        placeholder="Company"
      />
      <textarea
        className="rounded px-4 py-2"
        name="message"
        placeholder="What can we help you with?"
        rows={2}
      />

      <Button type="submit">Send</Button>
    </form>
  );
}
