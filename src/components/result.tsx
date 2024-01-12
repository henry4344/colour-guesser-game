export default function Result({ result }: { result: boolean | null }) {
  if (result === null) return <p>Select a colour...</p>;

  return result ? (
    <p style={{ color: "green" }}>Correct!</p>
  ) : (
    <p style={{ color: "red" }}>Incorrect!</p>
  );
}
