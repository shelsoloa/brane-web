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
      <input name="name" type="text" placeholder="Name" />
      <input name="email" type="email" placeholder="Email" />
      <input name="company" type="text" placeholder="Company" />
      <textarea name="message" placeholder="Message" rows={4} />

      <Button type="submit">Send</Button>
    </form>
  );
}
