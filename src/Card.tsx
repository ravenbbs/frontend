import confetti from "canvas-confetti";

interface CardProps {
  name: string;
  bio: string;
}

const Card = ({ name, bio }: CardProps) => {
  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 60,
    });
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl mx-auto">
      <figure className="px-2 pt-2">
        <img
          src="https://i.gifer.com/XyGD.gif"
          alt="Shoes"
          className="rounded-xl h-32"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{bio}</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={handleConfetti}>
            Confeti
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
