import type { PortfolioItem } from '~/types'

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'E-commerce Fashion Brand',
    category: 'E-commerce',
    description: 'Incremento del 250% en ventas online mediante estrategia integral de marketing.',
    metrics: ['+250% Ventas', '+180% Tráfico', '+95% Conversión'],
    image: '/images/portfolio-1.jpg',
  },
  {
    title: 'SaaS Tech Startup',
    category: 'Tecnología',
    description: 'Lanzamiento exitoso con 1,000 usuarios en el primer mes mediante campañas digitales.',
    metrics: ['1K Usuarios', '+300% ROI', '50K Impresiones'],
    image: '/images/portfolio-2.jpg',
  },
  {
    title: 'Restaurant Chain',
    category: 'Restaurantes',
    description: 'Revitalización de marca y aumento de reservas en un 180% con marketing local.',
    metrics: ['+180% Reservas', '+220% Engagement', '15K Seguidores'],
    image: '/images/portfolio-3.jpg',
  },
]
