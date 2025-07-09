type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function CodeEditor({ value, onChange }: Props): JSX.Element {
  return (
    <textarea
      className="code-editor"
      placeholder="Paste or write your code here..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
