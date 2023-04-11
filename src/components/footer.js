
export default function Footer() {
    return (
        <footer class="bg-white rounded-lg dark:bg-white m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="md:flex md:items-center md:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center md-4 md:md-0 justify-center">
                        <img className="w-16 rounded-xl" src="/imgs/icone.png" alt="" />
                    </a>
                    <ul class="flex flex-wrap items-center md-6 mt-4 md:mt-0 text-sm font-medium text-gray-900 md:md-0 dark:text-gray-900 justify-center">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 lg:my-8" />
                <span class="flex text-sm text-gray-500 sm:text-center dark:text-gray-800 justify-center">Razucco © 2023 <a href="https://flowbite.com/" class="hover:underline">™</a>. Todos os direitos reservados.</span>
            </div>
        </footer>


    )
}