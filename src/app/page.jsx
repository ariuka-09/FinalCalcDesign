import { Button } from "@/components/button";

export default function Home() {
  const buttons = [
    { value: "(", isPrimary: false },
    { value: ")", isPrimary: false },
    { value: "%", isPrimary: false },
    { value: "CE", isPrimary: false },

    { value: "7", isPrimary: true },
    { value: "8", isPrimary: true },
    { value: "9", isPrimary: true },
    { value: "÷", isPrimary: false },

    { value: "4", isPrimary: true },
    { value: "5", isPrimary: true },
    { value: "6", isPrimary: true },
    { value: "×", isPrimary: false },

    { value: "1", isPrimary: true },
    { value: "2", isPrimary: true },
    { value: "3", isPrimary: true },
    { value: "−", isPrimary: false },

    { value: "0", isPrimary: true },
    { value: ".", isPrimary: true },
    { value: "=", isPrimary: false },
    { value: "+", isPrimary: false },
  ];
  return (
    <div className="flex flex-col gap-2 w-fit">
      <div>
        <input
          type="text"
          className="w-full h-[90px] border-white/25 border-[1px] rounded-[20px]"
        />
      </div>

      <div className="grid grid-cols-4 w-fit gap-1">
        {buttons.map((button, index) => {
          return (
            <Button key={index + button.value} isPrimary={button.isPrimary}>
              {button.value}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
