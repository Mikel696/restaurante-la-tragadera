import ContactForm from "@/components/ui/ContactForm";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-brand-light py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-brand-dark">Contáctanos</h1>
          <p className="mt-4 text-lg text-gray-600">¡Estamos listos para atenderte!</p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Contact Info */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Nuestra Ubicación</h2>
            <div className="text-left space-y-3 text-gray-700">
              <p><strong className="text-brand-dark">Dirección:</strong> [Dirección del Restaurante], Soacha</p>
              <p><strong className="text-brand-dark">Teléfono:</strong> [Número de Teléfono]</p>
              <p><strong className="text-brand-dark">Horario:</strong> Lunes a Domingo de [Hora Apertura] a [Hora Cierre]</p>
            </div>
            {/* Placeholder for a map */}
            <div className="mt-6 bg-gray-300 w-full h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Mapa Próximamente</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Envíanos un Mensaje</h2>
            <div className="p-4 border rounded-lg text-center text-gray-500">
              Formulario de Contacto (temporalmente deshabilitado)
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}