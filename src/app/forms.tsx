"use client";

import { sendContactEmail } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const SendContactEmailSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  company: z.string().min(1),
  message: z.string().min(1),
});

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof SendContactEmailSchema>>({
    resolver: zodResolver(SendContactEmailSchema),
  });

  const onSubmit = async (formData: z.infer<typeof SendContactEmailSchema>) => {
    const f = new FormData();
    f.append("name", formData.name);
    f.append("email", formData.email);
    f.append("company", formData.company);
    f.append("message", formData.message);

    const { error } = await sendContactEmail(f);

    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Sent!",
        description:
          "Contact request sent successfully. We will get back to you soon.",
      });
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your name" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your email" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your company"
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Inquiry</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Describe what you would like to automate."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Send</Button>
      </form>
    </Form>
  );
}
