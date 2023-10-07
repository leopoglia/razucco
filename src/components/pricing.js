import { Link } from "react-router-dom";

export default function Pricing() {

    const products = (products, infos, name, desc, price, href) => (
        <div className="mx-auto max-w-2xl rounded-md ring-1 ring-gray-200 mt-10 lg:mx-0 lg:flex lg:max-w-none">

            <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="block md:flex items-center text-2xl font-bold tracking-tight text-gray-900">{name}
                    <div className="flex md:ml-4 mt-4 md:mt-0">
                        {products.map((product) => (
                            <img src={product} className="w-10 mr-4 rounded-md" alt="" />
                        ))
                        }
                    </div>

                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">{desc}</p>
                <div className="mt-4 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-blueblack">Está incluso</h4>
                    <div className="h-px flex-auto bg-gray-100"></div>
                </div>
                <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">

                    {infos.map((info) => (
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-blue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </svg>
                            <span>{info}</span>
                        </li>
                    ))}


                </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-md bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                        <p className="text-base font-semibold text-gray-600">Por apenas</p>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                            <span className="text-5xl font-bold tracking-tight text-gray-900">{price}</span>
                            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">/mes</span>
                        </p>
                        <Link to={href}>
                            <button className="mt-10 block w-full rounded-md bg-blue px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blueblack focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:blueblack">Assinar</button>
                        </Link>

                        <p className="mt-6 text-xs leading-5 text-gray-600">Na renovação serão entregue novas contas das plataformas.</p>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="bg-white py-10 sm:py-10">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="w-auto mx-auto block items-center xl:flex justify-center">
                    <div className="w-full flex items-center justify-center sm:mb-10">
                        <div className="text-center max-w-2x1 p-8">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Streaming preço justo</h2>
                            <p className="mt-6 text-lg leading-7 text-gray-600">Bem-vindo à Razucco, loja de contas de streaming compartilhadas! Nós oferecemos acesso a uma ampla variedade de plataformas de streaming de vídeo por uma fração do preço de uma conta individual.</p>
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <img src="./imgs/discount.png" className="h-96 object-cover object-center rounded-none lg:rounded-l-md ml-18 mr-18" alt="" />
                    </div>
                </div>

                {products(
                    [
                        "./imgs/logos/prime.png",
                        "./imgs/logos/hbo.png",
                        "./imgs/logos/disney.png",
                        "./imgs/logos/star.png",
                        "./imgs/logos/paramount.png",
                        "./imgs/logos/spotify.png"
                    ],
                    [
                        "Prime, HBO Max, Disney+, Star+, Paramount e Spotify",
                        "Suporte para qualquer problema",
                        "Reposição de conta",
                        "Aviso quando acabar o plano"

                    ],
                    "Super Combo Streaming",
                    "Aproveite o melhor do entretenimento com as quatro plataformas de streaming mais populares em uma única compra: Prime video, HBO Max, Disney+, Star+ e Spotify.",
                    "R$25,00",
                    "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848ab07174018aba61163a0688"
                )}

                {/* {products(
                    [
                        "./imgs/logos/youtube.png",
                        "./imgs/logos/crunchyroll.png",
                        "./imgs/logos/disney.png",
                        "./imgs/logos/hbo.png",
                        "./imgs/logos/star.png",
                        "./imgs/logos/spotify.png"
                    ],
                    [
                        "Youtube, Crunchyroll, Disney, HBO Max, Star+ e Spotify",
                        "Suporte para qualquer problema",
                        "Reposição de conta",
                        "Aviso quando acabar o plano"

                    ],
                    "Mega Combo Streaming",
                    "Aproveite o melhor do entretenimento com as quatro plataformas de streaming mais populares em uma única compra: Youtube, Crunchyroll, Disney, HBO Max, Star+ e Spotify.",
                    "R$35,00",
                    "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848abc9ff0018abf0a930101e6"
                )} */}


            </div>


        </div>

    )
} 