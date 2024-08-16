import { useState } from 'react'
import './App.css'
import Card from './Card'
import Form from './Form'


function App() {
  const [submittedData, setSubmittedData] = useState<{ name: string; bio: string } | null>(null);

  const handleFormSubmit = (data: { name: string; bio: string } | null) => {
    if (data) {
      setSubmittedData(data);
    }
  };

  return (
    <div className="App p-4 max-w-lg mx-auto">
    <Form onSubmit={handleFormSubmit} />
    {submittedData && (
      <div className="mt-6">
        <Card name={submittedData.name} bio={submittedData.bio} />
      </div>
    )}
  </div>
  )
}

export default App
