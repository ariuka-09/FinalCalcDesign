export function Button({ isPrimary, children }) {
  return (
    <div
      className={`w-[90px] h-[42px] rounded-[100px] py-1 flex justify-center items-center text-[10px]
        ${isPrimary ? "bg-[#333438]" : "bg-[#2c303d]"}
        ${children === "=" ? "bg-[#a8c7fa] text-black" : ""}
    `}
    >
      <p>{children}</p>
    </div>
  );
}
