import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Send } from 'lucide-react'
import { useState } from 'react'

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // For now, we'll simulate form submission
      // In production, you would send this to your backend or email service
      console.log('Form data:', data)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Open WhatsApp with pre-filled message
      const whatsappMessage = encodeURIComponent(
        `Hola, mi nombre es ${data.name}.\n\nEmail: ${data.email}\n\nMensaje: ${data.message}`
      )
      window.open(`https://wa.me/50684445138?text=${whatsappMessage}`, '_blank')

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Form Header */}
      <div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-3 uppercase">
          Pongámonos en Contacto
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Estamos listos para atender sus consultas y cotizaciones. Complete el
          formulario y nos pondremos en contacto con usted a la brevedad para
          brindarle la mejor asesoría sobre nuestros productos y servicios.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name">Nombre *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Su nombre completo"
            {...register('name')}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="su.email@ejemplo.com"
            {...register('email')}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje *</Label>
          <Textarea
            id="message"
            placeholder="Escribe tu mensaje aquí..."
            rows={6}
            {...register('message')}
            className={errors.message ? 'border-red-500' : ''}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensaje por WhatsApp
              </>
            )}
          </Button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              ¡Mensaje enviado por WhatsApp! Nos vemos ahi.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">
              Hubo un error al enviar el mensaje. Por favor intente nuevamente.
            </p>
          </div>
        )}
      </form>
    </div>
  )
}
