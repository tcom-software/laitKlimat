import { Image } from "@atoms";

const logos = [
  "maestro",
  "master-card",
  // "uniteller",
  "american-express",
  "mir",
  "visa",
];

const Payment = () => {
  return (
    <ul className="payment-icons">
      {logos.map((path, idx) => (
        <li key={idx}>
          <Image path={`/images/footer/${path}`} type="png" />
        </li>
      ))}
    </ul>
  );
};

export default Payment;
