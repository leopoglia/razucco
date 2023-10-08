const stats = [
    { id: 1, name: '60% mais barato com o Razucco', value: 'Economize' },
    { id: 2, name: 'Para a rede de compartilhamento', value: 'Contribua' },
    { id: 3, name: 'Com milhares de conteúdos', value: 'Divirta-se' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white py-18 sm:py-10 dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600 dark:text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-200">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  