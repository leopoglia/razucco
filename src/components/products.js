import { useState } from "react"
import ProductModal from "./product.js"

const products = [
  
  // {
  //   id: 1,
  //   name: 'Netflix - 30 dias 4K',
  //   href: '#',
  //   price: 'R$20,00',
  //   imageSrc: 'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
  //   imageAlt: 'Netflix',
  // },
  {
    id: 2,
    name: 'Disney Plus - 30 dias',
    href: '#',
    price: 'R$10,00',
    imageSrc: 'https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ',
    imageAlt: 'Disney Plus',
  },
  {
    id: 3,
    name: 'HBO Max - 30 dias',
    href: '#',
    price: 'R$10,00',
    imageSrc: 'https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8',
    imageAlt: 'HB0 Max',
  },
  {
    id: 4,
    name: 'Prime Video - 30 dias',
    href: '#',
    price: 'R$10,00',
    imageSrc: 'https://play-lh.googleusercontent.com/myQ1zhcsVayRfqU9J253CBDIIPKKrVZ4ZEP8Jgq04bRPvDi-Z1GnXG9ojdCVMxpbWpOQ=w480-h960',
    imageAlt: 'Prime Video',
  },
  {
    id: 5,
    name: 'Paramount Plus - 30 dias',
    href: '#',
    price: 'R$10,00',
    imageSrc: 'https://play-lh.googleusercontent.com/yRwIKVp_VSMpc4YRbXGaQcxOc-hPtnWlRTdb4FgLzrgnMrOXMkR7rYWQ4s8vY0iZZw',
    imageAlt: 'Paramount Plus',
  },
  {
    id: 6,
    name: 'Apple TV - 30 dias',
    href: '#',
    price: 'R$10,00',
    imageSrc: 'https://play-lh.googleusercontent.com/1XBAZjSOWaVM7UDFKvzuMR-WRoR5gCnsYrw17_ihHLcJKT9Qc7hXptHwWQ3Bf83mry4',
    imageAlt: 'Apple TV',
  },
  {
    id: 7,
    name: 'Crunchyroll - 30 dias',
    href: '#',
    price: 'R$10,00',
    imageSrc: 'https://store-images.s-microsoft.com/image/apps.42966.9007199266244356.370cd3e1-1443-49bc-902b-67e1afc6fd9d.fb87303e-4c57-4c85-a8f6-5675b46c1651',
    imageAlt: 'Crunchyroll',
  },
  {
    id: 8,
    name: 'Youtube Premium - 30 dias',
    href: '#',
    price: 'R$10,00',
    imageSrc: 'https://www.icsdevon.co.uk/wp-content/uploads/2021/09/YouTube-logo-1536x1536.png',
    imageAlt: 'Youtube Premium',
  },
  {
    id: 9,
    name: 'Spotify Premium - 30 dias',
    href: '#',
    price: 'R$10,00',
    imageSrc: 'https://play-lh.googleusercontent.com/nvz-bAP4aoChSpyENnKdNjMDeeRxCifE_VdTA4U-bJeKeZOAlZesFxFJ72yKlCJR2ro',
    imageAlt: 'Spotify Premium',
  },
  {
    id: 10,
    name: 'Deezer Premium - 30 dias',
    href: '#',
    price: 'R$10,00',
    imageSrc: 'https://play-lh.googleusercontent.com/r55K1eQcji3QMHRKERq6zE1-csoh_MTOHiKyHTuTOblhFi_rIz06_8GN5-DHUGJOpn79',
    imageAlt: 'Deezer Premium',
  },
  // More products...
]

export default function Product() {

  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div className="cursor-pointer" key={product.id} onClick={() => {setOpen(true); setProduct(product)}}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-600 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-600">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </div>
          ))}

          <ProductModal open={open} setOpen={setOpen} product={product} />

        </div>
      </div>
    </div>
  )
}