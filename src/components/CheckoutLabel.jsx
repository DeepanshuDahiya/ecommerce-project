export default function CheckoutLabel({ onClick, name, value, text }) {
  return (
    <div>
      <label
        className="flex items-center gap-2 cursor-pointer"
        onClick={onClick}
      >
        <input type="radio" name={name} value={value} />
        {text}
      </label>
    </div>
  );
}
