import React, { useState } from "react";

interface FormProps {
  onSubmit: (data: { name: string; bio: string } | null) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const [name, setName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //Logica para validar 
    if (name.length < 3 || name.startsWith(" ") || bio.length < 6) {
      setError("Por favor verifica que la información sea correcta");
      onSubmit(null); 
    } else {
      setError("");
      onSubmit({ name, bio });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold mx-auto">Ingresa tu nombre y biografía!!</h1>
        <label className="label">
          <span className="label-text">Nombre:</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Biografía:</span>
        </label>
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}
      <button type="submit" className="btn btn-primary w-full">
        Enviar
      </button>
    </form>
  );
}

export default Form