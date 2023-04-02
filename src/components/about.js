export default function Footer() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">

          <figure className="mt-10">
            <blockquote className="text-center text-xl font-ligth leading-8 text-gray-600 sm:text-2xl sm:leading-9">
              <p>
                “Acabei de assinar a Raze e estou adorando! O catálogo de filmes e séries é incrível, e a qualidade do streaming é excelente. Além disso, o atendimento ao cliente da Raze é excepcional - sempre recebo respostas rápidas e eficazes quando tenho alguma dúvida. Recomendo a Raze para quem procura um serviço de streaming de alta qualidade e confiável.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-800">Claudia Ramos</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-800">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-800">Cliente</div>
              </div>
            </figcaption>
          </figure>
        </div>

        
      </section>
    )
  }
  