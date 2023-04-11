import Chat from "./chat";
import { useState } from "react";

export default function Pricing() {

    const [open, setOpen] = useState(false);

    return (
        <div class="bg-white py-10 sm:py-10">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Streaming preço justo</h2>
                    <p class="mt-6 text-lg leading-7 text-gray-600">Bem-vindo à Razucco, loja de contas de streaming compartilhadas! Nós oferecemos acesso a uma ampla variedade de plataformas de streaming de vídeo por uma fração do preço de uma conta individual.</p>
                </div>
                <div class="mx-auto max-w-2xl rounded-md ring-1 ring-gray-200 mt-10 lg:mx-0 lg:flex lg:max-w-none">
                    <div class="p-8 sm:p-10 lg:flex-auto">
                        <h3 class="block md:flex items-center text-2xl font-bold tracking-tight text-gray-900">Super Combo Streaming
                            <div className="flex md:ml-4 mt-4 md:mt-0">
                                {/* <img src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI" className="w-10 mr-4 rounded-md" alt="" /> */}
                                <img src="https://play-lh.googleusercontent.com/myQ1zhcsVayRfqU9J253CBDIIPKKrVZ4ZEP8Jgq04bRPvDi-Z1GnXG9ojdCVMxpbWpOQ=w480-h960" className="w-10 mr-4 rounded-md" alt="" />
                                <img src="https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8" className="w-10 mr-4 rounded-md" alt="" />
                                <img src="https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ" className="w-10 mr-4 rounded-md" alt="" />
                                <img src="https://play-lh.googleusercontent.com/yRwIKVp_VSMpc4YRbXGaQcxOc-hPtnWlRTdb4FgLzrgnMrOXMkR7rYWQ4s8vY0iZZw" className="w-10 mr-4 rounded-md" alt="" />
                            </div>

                        </h3>
                        <p class="mt-6 text-base leading-7 text-gray-600">Aproveite o melhor do entretenimento com as quatro plataformas de streaming mais populares em uma única compra: Prime video, HBO Max e Disney+ e Paramount.</p>
                        <div class="mt-10 flex items-center gap-x-4">
                            <h4 class="flex-none text-sm font-semibold leading-6 text-indigo-600">Está incluso</h4>
                            <div class="h-px flex-auto bg-gray-100"></div>
                        </div>
                        <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                            <li class="flex gap-x-3">
                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Prime, HBO Max, Disney+ e Paramount
                            </li>

                            <li class="flex gap-x-3">
                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Suporte para qualquer problema
                            </li>

                            <li class="flex gap-x-3">
                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Reposição de conta
                            </li>

                            <li class="flex gap-x-3">
                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Aviso quando acabar o plano
                            </li>
                        </ul>
                    </div>
                    <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div class="rounded-md bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div class="mx-auto max-w-xs px-8">
                                <p class="text-base font-semibold text-gray-600">Por apenas</p>
                                <p class="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span class="text-5xl font-bold tracking-tight text-gray-900">R$20</span>
                                    <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">/mes</span>
                                </p>
                                <button onClick={() => setOpen(true)} class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Assinar</button>
                                <p class="mt-6 text-xs leading-5 text-gray-600">Pagamento somente com pix no momento</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {open && <Chat />}


        </div>

    )
} 