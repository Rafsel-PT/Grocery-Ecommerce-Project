import Button from "./Button";

export default function MainSearch() {
  return (
    <div className="flex bg-[#F3F3F3] items-center text-xs w-full">
      <div className="flex px-3 w-[calc(100%-55px)]">
        <span className="pe-3 w-[100px]">
          <select className="w-full">
            <option value="1">All Categories</option>
            <option value="2">Fruits & Vegetables</option>
            <option value="3">Leafy Greens</option>
            <option value="3">Fresh Fruits</option>
            <option value="3">Fresh Vegetables</option>
            <option value="3">Organic Produce</option>
          </select>
        </span>
        <input
          type="text"
          placeholder="Search for items..."
          className="border-l border-solid border-theme-gray ps-2 w-[calc(100%-100px)]"
        />
      </div>

      <Button
        variant="primary"
        className="!p-0 w-[55px] h-[42px] flex items-center justify-center  rounded-s-none"
      >
        <img src="search.svg" className="w-6" />
      </Button>
    </div>
  );
}
