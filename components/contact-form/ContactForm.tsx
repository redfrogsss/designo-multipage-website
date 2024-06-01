"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import FadeInBottom from "../utils/FadeInBottom"
import { createContactEntry } from "@/app/actions/createContactEntry"

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    phone: z.string().min(2).max(15),
    message: z.string().min(2).max(256)
})

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const res = await createContactEntry(values);

            if (res.success) {
                alert("Your message has been sent successfully.");
            } else {
                throw new Error("There was an error sending your message. Please try again later.");
            }
        } catch (error) {
            alert("There was an error sending your message. Please try again later.");
        }
    }

    return (
        <div className="contact-form">
            <div className="page-container">
                <FadeInBottom>
                    <div className="contact-form__inner">
                        <div className="contact-form__left">
                            <h2 className="contact-form__title">Contact Us</h2>
                            <p className="contact-form__desc">
                                Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
                            </p>
                        </div>
                        <div className="contact-form__right">
                            <div className="contact-form__form">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="sr-only">Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Name" {...field} />
                                                    </FormControl>
                                                    <FormDescription className="sr-only">
                                                        This is your name.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="sr-only">Email Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Email Address" {...field} />
                                                    </FormControl>
                                                    <FormDescription className="sr-only">
                                                        This is your email.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="sr-only">Phone</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Phone" {...field} />
                                                    </FormControl>
                                                    <FormDescription className="sr-only">
                                                        This is your public display name.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="sr-only">Message</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="Your Message" {...field} />
                                                    </FormControl>
                                                    <FormDescription className="sr-only">
                                                        This is your message.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <button type="submit" className="contact-form__submit-btn btn btn--dark">Submit</button>
                                    </form>
                                </Form>
                            </div>
                        </div>
                    </div>
                </FadeInBottom>
            </div>
        </div>
    );
}