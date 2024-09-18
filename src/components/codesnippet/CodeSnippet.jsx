import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ language, code, scope }) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleRunCode = () => {
    setIsEditable(true);
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      {!isEditable ? (
        <SyntaxHighlighter language={language} style={vscDarkPlus}>
          {code}
        </SyntaxHighlighter>
      ) : (
        <LiveProvider code={code} scope={scope}>
          <LiveEditor style={{ backgroundColor: '#1e1e1e', color: '#d4d4d4' }} />
          <LiveError style={{ color: 'red' }} />
          <LivePreview style={{ border: '1px solid #ddd', padding: '1rem', marginTop: '1rem' }} />
        </LiveProvider>
      )}
      <button onClick={handleRunCode} style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>
        {isEditable ? 'Reset' : 'Run Code'}
      </button>
    </div>
  );
};

export default CodeSnippet;

