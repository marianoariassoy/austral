export const nav = [
  {
    id: 1,
    title: 'Home',
    path: '#home'
  },
  {
    id: 2,
    title: 'Somos Austral',
    path: '#somosaustral'
  },
  {
    id: 3,
    title: 'Productos',
    products: ['Ventilación', 'Aire Acondicionado']
  },
  {
    id: 4,
    title: 'Servicios',
    path: '#servicios'
  },
  {
    id: 5,
    title: 'Nuestros Proyectos',
    path: '#clientes'
  },
  {
    id: 6,
    title: 'Contacto',
    path: '#contacto'
  }
]

export const dataContact = {
  es: {
    name: 'Nombre y apellido*',
    city: 'Ciudad',
    email: 'E-Mail*',
    location: 'Localidad',
    phone: 'Teléfono*',
    country: 'País',
    message: 'Mensaje',
    send: 'Enviar',
    thanks: '¡Su mensaje fue enviado! Gracias por contactarte con nosotros.',
    error: 'Se produjo un error al enviar el mensaje :-(',
    required: 'Por favor complete este campo'
  },
  en: {
    name: 'Name and surname*',
    city: 'City',
    email: 'E-Mail*',
    location: 'Location',
    phone: 'Phone*',
    country: 'Country',
    message: 'Message',
    send: 'Send',
    thanks: 'Your message was sent! Thank you for contacting us.',
    error: 'An error occurred while sending the message :-(',
    required: 'Please complete this field'
  }
}
