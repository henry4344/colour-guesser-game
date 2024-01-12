export default function ColourBox({ colour }: { colour: string }) {
  return (
    <div className="colour-box mg" style={{ backgroundColor: colour }}></div>
  );
}
