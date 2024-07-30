import { useDashboardStore } from "../Zustand/DashboardStore";

export default function Sidebar() {
  const text = useDashboardStore((state) => state.text);
  const handleSetText = useDashboardStore((state) => state.handleSetText);
  const handleSubmit = useDashboardStore((state) => state.handleSubmit);
  return (
    <div className="row-span-1 col-span-1 border-2 border-[black] dark:border-[white] h-full md:h-[25%] p-5">
      <form onSubmit={handleSubmit} href="*" className="w-full">
        <input
          type="text"
          value={text}
          placeholder="Enter your link...."
          onChange={(e) => handleSetText(e)}
          className="w-full h-8 rounded outline-0 border-[1px] border-[black] dark:border-[white] px-2 py-1"
        />
        <button
          disabled={text.length < 1}
          className={`my-2 w-full bg-[black] text-[white] dark:bg-[white] dark:text-[black] text-l font-medium p-2 rounded-lg ${
            text.length > 0 ? "opacity-100" : "opacity-20"
          }`}
        >
          Add the link
        </button>
      </form>
    </div>
  );
}
