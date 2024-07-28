'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"


export function AuthForm() {

    const form = useForm()

    const handleSubmit = form.handleSubmit((data) => {
        console.log(data)
    })

    return (
        <div className="mx-auto max-w-md py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Sign in with a magic link</h1>
            <p className="text-muted-foreground">Enter your email address and well send you a magic link to sign in.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
            <Label htmlFor="email" className="sr-only">
                Email address
            </Label>
            <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                {... form.register('email')}
            />
            </div>
            <div>
            <Button type="submit" className="w-full">
                Send magic link
            </Button>
            </div>
        </form>
        </div>
    )
}