import { useState } from "react"
import ProductModal from "./product.js"

const products = [
  
  // {
  //   id: 1,
  //   name: 'Netflix - 30 dias 4K',
  //   href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9fed018abf12e1640200',
  //   price: 'R$20,00',
  //   imageSrc: './imgs/logos/netflix.png',
  //   imageAlt: 'Netflix',
  //   desc: "Com essa assinatura, você pode desfrutar de uma ampla variedade de filmes, séries e documentários em alta resolução durante 30 dias. Ideal para quem busca uma experiência de entretenimento de alta qualidade."
  // },
  {
    id: 2,
    name: 'Disney Plus - 30 dias',
    href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9ff6018abf1f111801cd',
    price: 'R$10,00',
    imageSrc: './imgs/logos/disney.png',
    imageAlt: 'Disney Plus',
    desc: 'O Disney Plus proporciona acesso a uma vasta biblioteca de conteúdo da Disney, Pixar, Marvel, Star Wars e National Geographic por um mês. Com essa assinatura, você pode mergulhar em filmes clássicos, séries populares e conteúdo exclusivo da Disney.'
  },
  {
    id: 3,
    name: 'HBO Max - 30 dias',
    href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9fed018abf20d8e7020e',
    price: 'R$10,00',
    imageSrc: './imgs/logos/hbo.png',
    imageAlt: 'HB0 Max',
    desc: 'Com essa assinatura, você pode desfrutar de sucessos como Game of Thrones, Westworld, Friends, além de novos lançamentos de filmes. Uma escolha excelente para os amantes de entretenimento que buscam conteúdo de alta qualidade durante 30 dias.'
  },
  {
    id: 4,
    name: 'Prime Video - 30 dias',
    href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9fed018abf21609e020f',
    price: 'R$5,00',
    imageSrc: './imgs/logos/prime.png',
    imageAlt: 'Prime Video',
    desc: 'Com essa assinatura, você pode explorar uma variedade de conteúdo de entretenimento, incluindo séries premiadas, filmes populares e produções exclusivas da Amazon. Uma opção ideal para quem deseja aproveitar uma ampla gama de entretenimento durante 30 dias.'
  },
  {
    id: 5,
    name: 'Paramount Plus - 30 dias',
    href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9ff0018abf21b2ba0203',
    price: 'R$5,00',
    imageSrc: './imgs/logos/paramount.png',
    imageAlt: 'Paramount Plus',
    desc: 'Paramount Plus oferece acesso a um vasto catálogo de filmes, séries e programas exclusivos da Paramount Pictures e outros estúdios. Com essa assinatura, você pode desfrutar de conteúdo de entretenimento de alta qualidade durante um mês.'
  },
  {
    id: 6,
    name: 'Apple TV - 30 dias',
    href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9ff6018abf2205fa01ce',
    price: 'R$5,00',
    imageSrc: './imgs/logos/apple.png',
    imageAlt: 'Apple TV',
    desc: 'Apple TV proporciona acesso a séries originais da Apple, filmes exclusivos, documentários emocionantes e muito mais. Com essa assinatura, você pode mergulhar em um mundo de conteúdo premium da Apple por um mês.'
  },
  {
    id: 7,
    name: 'Star Plus - 30 dias',
    href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9ff6018abf2266d001cf',
    price: 'R$10,00',
    imageSrc: './imgs/logos/star.png',
    imageAlt: 'Star Plus',
    desc: 'Star Plus oferece acesso a um amplo catálogo de séries, filmes e programas de televisão da Disney, incluindo conteúdo da Marvel, Star Wars e National Geographic. Com essa assinatura, você pode explorar uma galáxia de entretenimento por um mês.'
  },
  {
    id: 8,
    name: 'Crunchyroll - 30 dias',
    href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9ff6018abf22bcc301d2',
    price: 'R$8,00',
    imageSrc: './imgs/logos/crunchyroll.png',
    imageAlt: 'Crunchyroll',
    desc: 'Crunchyroll proporciona acesso a uma vasta coleção de anime, incluindo séries populares, lançamentos recentes e clássicos. Com essa assinatura, você pode entrar no mundo emocionante da animação japonesa por um mês.'
  },
  {
    id: 9,
    name: 'Youtube Premium - 30 dias',
    href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9ff0018abf231d650204',
    price: 'R$5,00',
    imageSrc: './imgs/logos/youtube.png',
    imageAlt: 'Youtube Premium',
    desc: 'Youtube Premium oferece uma experiência sem anúncios no YouTube, acesso ao YouTube Music Premium e a capacidade de baixar vídeos para assistir offline. Com essa assinatura, você pode aproveitar o YouTube sem interrupções por um mês.'
  },
  {
    id: 10,
    name: 'Spotify Premium - 30 dias',
    href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9fed018abf2392de0211',
    price: 'R$5,00',
    imageSrc: './imgs/logos/spotify.png',
    imageAlt: 'Spotify Premium',
    desc: 'Spotify Premium proporciona acesso a milhões de músicas sem anúncios, a capacidade de baixar músicas para ouvir offline e a opção de criar playlists personalizadas. Com essa assinatura, você pode curtir sua música favorita sem limitações por um mês.'
  },
  {
    id: 11,
    name: 'Deezer Premium - 30 dias',
    href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9fed018abf23e28e0212',
    price: 'R$5,00',
    imageSrc: './imgs/logos/deezer.png',
    imageAlt: 'Deezer Premium',
    desc: 'Deezer Premium oferece acesso a um vasto catálogo de músicas, podcasts e estações de rádio. Com essa assinatura, você pode desfrutar de uma experiência musical premium por um mês.'
  },
 

  {
    id: 12,
    name: 'Tidal Premium - 30 dias',
    href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9ff6018ac38e48ac038d',
    price: 'R$8,00',
    imageSrc: './imgs/logos/tidal.png',
    imageAlt: 'Tidal Premium',
    desc: 'Tidal Premium oferece acesso a um vasto catálogo de músicas, podcasts e vídeos musicais. Com essa assinatura, você pode mergulhar em um mundo de música por um mês.'
  },

  {
    id: 13,
    name: 'DAZN - 30 dias',
    href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9ff0018ac38ed4c803c3',
    price: 'R$10,00',
    imageSrc: './imgs/logos/dazn.png',
    imageAlt: 'DAZN',
    desc: 'DAZN oferece acesso a uma ampla variedade de esportes, incluindo futebol, basquete, tênis, boxe e muito mais. Com essa assinatura, você pode mergulhar em um mundo de esportes por um mês.'
  },

  {
    id: 14,
    name: 'My Family Cinema - 30 dias',
    href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9ff6018ac390f5c50390',
    price: 'R$10,00',
    imageSrc: './imgs/logos/mycinema.png',
    imageAlt: 'My Family Cinema',
    desc: 'My Family Cinema oferece acesso a um amplo catálogo de filmes e séries de TV. Com essa assinatura, você pode mergulhar em um mundo de entretenimento por um mês.'
  },

  // {
  //   id: 14,
  //   name: 'Play Plus - 30 dias',
  //   href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848ab07174018abf24f9c40215',
  //   price: 'R$5,00',
  //   imageSrc: './imgs/logos/playplus.png',
  //   imageAlt: 'Play Plus',
  //   desc: 'Play Plus oferece acesso a um amplo catálogo de filmes, séries, programas de TV e reality shows. Com essa assinatura, você pode mergulhar em um mundo de entretenimento por um mês.'
  // },

  // {
  //   id: 15,
  //   name: 'Brasil Paralelo - 30 dias',
  //   href: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848ab07174018abf254d9e0216',
  //   price: 'R$10,00',
  //   imageSrc: './imgs/logos/brasilparalelo.png',
  //   imageAlt: 'Brasil Paralelo',
  //   desc: 'Brasil Paralelo oferece acesso a um vasto catálogo de documentários e séries. Com essa assinatura, você pode mergulhar em um mundo de conhecimento por um mês.'
  // }
  // More products...
]

export default function Products() {

  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});

  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div className="cursor-pointer hover:opacity-90" key={product.id} onClick={() => {setOpen(true); setProduct(product)}}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-600 xl:aspect-h-8 xl:aspect-w-7 dark:border-gray-950 dark:border">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-600 dark:text-gray-300">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900 dark:text-gray-100">{product.price}</p>
            </div>
          ))}

          <ProductModal open={open} setOpen={setOpen} product={product} />

        </div>
      </div>
    </div>
  )
}