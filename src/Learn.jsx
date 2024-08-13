'use client'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import CodeSnippet from './CodeSnippet'
import Footer from './Footer'
import infoData from './data'

const navigation = [
  { name: 'Beginner', href: '/learn' },
  { name: 'Intermediate', href: '/underprogress' },
  { name: 'Advanced', href: '/underprogress' },
  { name: 'Projects', href: '/underprogress' },
]

export default function Learn() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  const [selectedOption, setSelectedOption] = useState('Welcome');
  const [info, setInfo] = useState(infoData && infoData["Welcome"] ? infoData["Welcome"] : "Default value");
  const options = [
    'Welcome',
    'Python',
    'Cpp',
    'Swift',
    'JavaScript',
  ];

  const handleSelectChange = (event) => {
    const selected = event.target.value;
    setSelectedOption(selected);
    setInfo(infoData[selected])
  };



  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1 className='text-xl font-bold text-indigo-700'>CodeMore</h1>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link to = "/underprogress" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to = "/underprogress" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      to = "/underprogress"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
        <div className=" absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[128rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(128rem_128rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
          </svg>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="m-5">
            <label htmlFor="assignedTo" className="block text-gray-700 text-lg font-medium mb-2">
              Choose Language
            </label>
            <select
              id="assignedTo"
              value={selectedOption}
              onChange={handleSelectChange}
              className="h-12 w-64 p-4.5 text-lg text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
              {options.map((option) => (
                <option key={option} value={option} className="p-2 text-lg">
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:items-start">
  <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl  lg:gap-x-8 lg:px-8">
    <div className="lg:pr-4">
      <div className="">
        <p className="text-base font-semibold leading-7 text-indigo-600">Beginner</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {selectedOption === 'Cpp' ? 'C++' : selectedOption}
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-700">
          {/* Add some introductory content here if needed */}
        </p>
        <div>
          {info && info.length > 0 && selectedOption !== 'Welcome' ? (
            info.map((section, index) => (

              <div key = {index} className=' lg:grid lg:grid-cols-8 lg:gap-8 lg:items-start'>
              <div key={index} className=" lg:col-span-4 items-start">
                <h2 className=" py-5 text-2xl font-bold tracking-tight text-gray-900 items-start">
                  {section.topic}
                </h2>
                <p className=" py-5 text-lg leading-7 text-gray-700">
                  {section.details}
                </p>
                </div>
                <div className='py-5 lg:col-span-4'>
                <CodeSnippet code={section.CodeSnippet} language={selectedOption.toLowerCase()} />
              </div>
              </div>
            ))
          ) : (
            // <p className="text-lg text-gray-500">Please select a language to see the details.</p>
            info.map((section, index) => (
            <div key = {index} className='p-5 lg:grid lg:grid-cols-8 lg:gap-4 lg:items-start'>
              <div key={index} className=" lg:col-span-8 items-start">
                <h2 className="p-3 text-2xl font-bold tracking-tight text-gray-900 items-start">
                  {section.topic}
                </h2>
                <p className="p-3 text-lg leading-7 text-gray-700">
                  {section.details}
                </p>
                </div>
                <div className='lg:col-span-4'>
                
              </div>
              </div>
          )))}
        </div>
      </div>
    </div>
    {/* code Snippet */}
    {/* <div className="mt-16 lg:mt-0">
      {info && info.length > 0 ? (
        info.map((section, index) => (
          <div key={index} className="mt-16">
            <CodeSnippet code={section.CodeSnippet} language={'python'} />
          </div>
        ))
      ) : (
        <p className="text-lg text-gray-500">Please select a language to see the code snippet.</p>
      )}
    </div> */}
  </div>
</div>

      </div>

    </>
  )
}