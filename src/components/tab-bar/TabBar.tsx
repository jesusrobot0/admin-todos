"use client";

import { useState } from "react";
import { setCookie } from "cookies-next";

interface Props {
  currentTab?: number;
  tabsOptions?: number[];
}

const styleHash: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

export function TabBar({ currentTab = 1, tabsOptions = [1, 2, 3, 4] }: Props) {
  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie("selectedTab", String(tab));
  };
  return (
    <div
      className={`grid w-full ${
        styleHash[tabsOptions.length]
      } space-x-2 rounded-xl bg-gray-200 p-2`}
    >
      {tabsOptions.map((tab) => (
        <div key={tab}>
          <input
            type="radio"
            id={String(tab)}
            className="peer hidden"
            checked={selected === tab}
            onChange={() => {}}
          />

          <label
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white transition-all"
            onClick={() => onTabSelected(tab)}
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
}
