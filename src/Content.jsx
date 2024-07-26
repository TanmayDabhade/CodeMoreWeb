import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Quick reference at your fingertips.',
    description:
      'CodeMore ensures students can easily refer to key programming concepts anytime, anywhere, making it an indispensable tool for both beginners and experienced coders.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Interactive learning modules.',
    description: 'The app includes interactive quizzes and tutorials that reinforce learning through practice, ensuring a deeper understanding of programming languages.',
    icon: LockClosedIcon,
  },
  {
    name: 'Resource hub.',
    description: 'The app’s extensive resource hub includes tutorials, code snippets, and documentation, making it easier for students to find the information they need to succeed.',
    icon: ServerIcon,
  },
]

export default function Content() {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
        

              <h2 className="text-base font-semibold leading-7 text-indigo-600">Learn faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Become a PROgrammer</p>
              <p className="mt-6 text-lg leading-8 text-white">
              CodeMore is an innovative iOS application designed to provide students with quick access to the basics of various programming languages. 
              This app simplifies the learning process by offering resources that help users understand fundamental concepts efficiently.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
            </div>
          </div>
          <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
          <img
            alt="Product screenshot"
            src="../src/assets/appScreenshots.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
