interface PropsDefinition {
  colourString: string;
  checkResult(data: string): void;
}

export default function ColourButton({
  colourString,
  checkResult,
}: PropsDefinition) {
  return (
    <button className="mg" onClick={() => checkResult(colourString)}>
      {colourString}
    </button>
  );
}
