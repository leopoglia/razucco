
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Product(props) {
    const product = props.product;

    const [buy, setBuy] = useState(false);
    const [open, setOpen] = useState(true);

    return (
        <div>


            <Transition.Root show={props.open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 hidden bg-gray-800 bg-opacity-75 transition-opacity md:block" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                enterTo="opacity-100 translate-y-0 md:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            >
                                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                                    <div className="rounded-md relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                        <button
                                            type="button"
                                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                            onClick={() => { setOpen(false); props.setOpen(false) }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                                <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                                            </div>
                                            <div className="h-full grid sm:col-span-8 lg:col-span-7">
                                                <div className='mt-0'>
                                                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                                                    <section aria-labelledby="information-heading" className="mt-2">
                                                        <h3 id="information-heading" className="sr-only">
                                                            Product information
                                                        </h3>

                                                        <p className="text-gray-900">{product.desc}</p>


                                                        <div className='flex items-center justify-between mt-4 mb-4'>
                                                            <p className="text-2xl text-gray-900">{product.price}</p>

                                                            {/* Reviews */}
                                                            <div>
                                                                <h4 className="sr-only">Reviews</h4>
                                                                <div className="flex items-center">
                                                                    <div className="flex items-center">
                                                                        {[0, 1, 2, 3, 4].map((rating) => (
                                                                            <StarIcon
                                                                                key={rating}
                                                                                className={classNames(
                                                                                    product.rating > rating ? 'text-yellow-900' : 'text-yellow-500',
                                                                                    'h-5 w-5 flex-shrink-0'
                                                                                )}
                                                                                aria-hidden="true"
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                    <p className="sr-only">{product.rating} out of 5 stars</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>

                                                <section aria-labelledby="options-heading" className="flex items-end w-full">
                                                    <h3 id="options-heading" className="sr-only">
                                                        Product options
                                                    </h3>

                                                    <Link className="w-full" to={props.product.href}>
                                                        <button
                                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full">
                                                            Comprar
                                                        </button>
                                                    </Link>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>



        </div>
    )
}
