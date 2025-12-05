import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-heading font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-heading mb-6">
        Oops... ese enlace no lo tenemos :(
      </h2>
      <Button asChild size="lg">
        <Link to="/">Vamos al inicio</Link>
      </Button>
    </div>
  )
}
