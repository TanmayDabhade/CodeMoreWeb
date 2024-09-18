import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react'; // Or import { Controlled as CodeMirror } from 'react-codemirror2'
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Syntax highlighting theme

const CodeSandbox = ({ language, defaultCode }) => {
  const [code, setCode] = useState(defaultCode); // Initialize with default code
  const [output, setOutput] = useState('');

  const runCode = async () => {
    try {
      const response = await axios.post(
        'https://judge0-ce.p.rapidapi.com/submissions',
        {
          source_code: code,
          language_id: getLanguageId(language), // Function to get language ID for Judge0
          stdin: '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
          },
        }
      );

      // Poll for result
      const resultResponse = await axios.get(
        `https://judge0-ce.p.rapidapi.com/submissions/${response.data.token}`,
        {
          headers: {
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY',
          },
        }
      );

      setOutput(resultResponse.data.stdout || resultResponse.data.stderr);
    } catch (error) {
      console.error('Error running code:', error);
    }
  };

  const getLanguageId = (lang) => {
    // Function to map language name to Judge0 language ID
    const languages = { javascript: 63, python: 71, 'c++': 54 }; // Add more languages as needed
    return languages[lang.toLowerCase()] || 63;
  };

  return (
    <div className="code-sandbox">
      <Editor
        height="200px"
        defaultLanguage={language}
        value={code}
        onChange={(value) => setCode(value)}
      />
      <button onClick={runCode}>Run Code</button>
      {output && (
        <SyntaxHighlighter language="text" style={darcula}>
          {output}
        </SyntaxHighlighter>
      )}
    </div>
  );
};

export default CodeSandbox;
