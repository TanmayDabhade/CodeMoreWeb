// LearnAdv.js
import { useState } from 'react'
import Header from './components/normal/Header'
import LanguageSelector from './components/advLearn/LanguageSelector'
import LanguageContent from './components/advLearn/LanguageContent'
import AdvancedData from './data/AdvancedData'

export default function LearnAdv() {
  const [selectedOption, setSelectedOption] = useState('Welcome');
  const [info, setInfo] = useState(AdvancedData && AdvancedData["Welcome"] ? AdvancedData["Welcome"] : "Default value");

  const options = [
    'Welcome',
    'Python',
    'Cpp',
    'Swift',
    'JavaScript',
    'Java',
    'Kotlin',
    'Ruby',
    'Go',
    'Rust',
    'TypeScript',
  ];

  const handleSelectChange = (event) => {
    const selected = event.target.value;
    setSelectedOption(selected);
    setInfo(AdvancedData[selected])
  };

  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <Header />
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:items-start">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="flex justify-between">
                <div className="block">
                  <p className="text-base font-semibold leading-7 text-indigo-600">Advanced</p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {selectedOption === 'Cpp' ? 'C++' : selectedOption}
                  </h1>
                </div>
                <LanguageSelector
                  selectedOption={selectedOption}
                  handleSelectChange={handleSelectChange}
                  options={options}
                />
              </div>
              <LanguageContent selectedOption={selectedOption} info={info} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
