"use client";

interface Props {
  currentTab?: number;
  tabsOptions?: number[];
}

export const TabBar = ({
  currentTab = 1,
  tabsOptions = [1, 2, 3, 4],
}: Props) => {
  return (
    <div
      className={`grid w-full grid-cols-${tabsOptions.length} space-x-2 rounded-xl bg-gray-200 p-2`}
    >
      {tabsOptions.map((tab) => (
        <div key={tab}>
          <input type="radio" id={String(tab)} className="peer hidden" />
          <label className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
