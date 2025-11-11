export default function CheckoutInput({
  type = "text",
  placeholder = "Input",
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-stone-400 rounded-lg p-2 h-10 w-[80%]"
      />
    </>
  );
}
