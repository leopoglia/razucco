
const products = [
    {
      id: 1,
      name: 'Disney Plus - 30 dias',
      href: '#',
      price: 'R$5',
      imageSrc: 'https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'HBO Max - 30 dias',
      href: '#',
      price: 'R$5',
      imageSrc: 'https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Prime Video - 30 dias',
      href: '#',
      price: 'R$5',
      imageSrc: 'https://play-lh.googleusercontent.com/VojafVZNddI6JvdDGWFrRmxc-prrcInL2AuBymsqGoeXjT4f9sv7KnetB-v3iLxk_Koi',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Netflix - 30 dias',
      href: '#',
      price: 'R$10',
      imageSrc: 'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]

export default function Product() {
    return (
        <div className="bg-black text-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-600 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-200">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-400">{product.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}