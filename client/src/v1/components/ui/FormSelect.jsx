const FormSelect = ({ label, name, value, onChange, options = [] }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-xs font-bold">{label}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border p-2 rounded text-xs border-gray-400 outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
