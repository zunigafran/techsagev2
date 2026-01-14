"use client"

import { z } from "zod"
import { useState } from "react"
import { Card, CardFooter } from "@/components/ui/card"
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { FormGroup } from "@/components/ui/form-group"
import { Controller, useForm } from "react-hook-form"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
})

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const { handleSubmit, control } = form

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      toast.success('Message sent successfully! I\'ll get back to you soon.')
      form.reset()
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full sm:max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-SEMIbold text-center">Send me a message</CardTitle>
            <CardDescription className="text-sm text-center">Get in touch with me and I&apos;ll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Controller
                name="name"
                control={control}
                render={({ field, fieldState}) => (
                  <Field>
                    <FieldLabel
                    htmlFor="form-rhf-demo-title"
                    >
                      Name
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your name"
                      autoComplete="off"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
                />
                <Controller
                name="email"
                control={control}
                render={({ field, fieldState}) => (
                  <Field>
                    <FieldLabel
                    htmlFor="form-rhf-demo-email"
                    >
                      Email
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your email"
                      autoComplete="off"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
                />
                <Controller
                name="message"
                control={control}
                render={({ field, fieldState}) => (
                  <Field>
                    <FieldLabel
                    htmlFor="form-rhf-demo-message"
                    >
                      Message
                    </FieldLabel>
                    <Textarea
                      {...field}
                      id="form-rhf-demo-message"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your message"
                      autoComplete="off"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
                />
              </FormGroup>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button 
              type="submit" 
              variant="default" 
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => form.reset()}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </CardFooter>
        </Card>
    </div>
  )
}

export default Page