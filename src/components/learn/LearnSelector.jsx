// LanguageSelector.js
export default function LanguageSelector({ selectedOption, handleSelectChange, options }) {
    return (
      <div className="m-5">
        <label htmlFor="assignedTo" className="block text-gray-700 text-lg font-medium mb-2">
          Choose Language
        </label>
        <select
          id="assignedTo"
          value={selectedOption}
          onChange={handleSelectChange}
          className="h-12 w-64 p-4.5 text-lg rounded-xl text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        >
          {options.map((option) => (
            <option key={option} value={option} className="p-2 text-lg">
              {option}
            </option>
          ))}
        </select>
      </div>
    )
  }
  