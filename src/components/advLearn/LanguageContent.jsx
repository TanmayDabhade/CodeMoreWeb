// LanguageContent.js
import CodeSnippet from '../codesnippet/CodeSnippet'

export default function LanguageContent({ selectedOption, info }) {
  return (
    <div>
      {info && info.length > 0 && selectedOption !== 'Welcome' ? (
        info.map((section, index) => (
          <div key={index} className="lg:grid lg:grid-cols-8 lg:gap-8 lg:items-start">
            <div className="lg:col-span-4">
              <h2 className="py-5 text-2xl font-bold tracking-tight text-gray-900">
                {section.topic}
              </h2>
              <p className="py-5 text-lg leading-7 text-gray-700">
                {section.details}
              </p>
            </div>
            <div className="py-5 lg:col-span-4">
              <CodeSnippet code={section.CodeSnippet} language={selectedOption.toLowerCase()} />
            </div>
          </div>
        ))
      ) : (
        info.map((section, index) => (
          <div key={index} className="p-5 lg:grid lg:grid-cols-8 lg:gap-4 lg:items-start">
            <div className="lg:col-span-8">
              <h2 className="p-3 text-2xl font-bold tracking-tight text-gray-900">
                {section.topic}
              </h2>
              <p className="p-3 text-lg leading-7 text-gray-700">
                {section.details}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
