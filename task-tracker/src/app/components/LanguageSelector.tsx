type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function LanguageSelector({ value, onChange }: Props): JSX.Element {
  return (
    <select className="dropdown" value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="python">Python</option>
      <option value="javascript">JavaScript</option>
      <option value="java">Java</option>
      <option value="c">C</option>
      <option value="cpp">C++</option>
    </select>
  );
}
