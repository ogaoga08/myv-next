"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

const frameworks = [
  {
    value: "tongue",
    label: "タン",
  },
  {
    value: "neck",
    label: "ネック",
  },
  {
    value: "misuji",
    label: "ミスジ",
  },
  {
    value: "katasankaku",
    label: "肩サンカク",
  },
  {
    value: "zabuton",
    label: "ザブトン",
  },
  {
    value: "sirloin",
    label: "サーロイン",
  },
  {
    value: "ribeye",
    label: "リブロース",
  },
  {
    value: "tenderloin",
    label: "ヒレ",
  },
  {
    value: "chateaubriand",
    label: "シャトーブリアン",
  },
  {
    value: "short-rib(karubi)",
    label: "タテバラ(カルビ)",
  },
  {
    value: "flap-meat",
    label: "カイノミ",
  },
  {
    value: "sankakubara",
    label: "サンカクバラ(特上カルビ)",
  },
  {
    value: "rump",
    label: "ランプ",
  },
  {
    value: "ichibo",
    label: "イチボ",
  },
  {
    value: "shikinbo",
    label: "シキンボ",
  },
  {
    value: "shinshin",
    label: "シンシン",
  },
  {
    value: "hatsu",
    label: "ハツ",
  },
  {
    value: "tsurami",
    label: "ツラミ",
  },
  {
    value: "urute",
    label: "ウルテ",
  },
  {
    value: "shibire",
    label: "シビレ",
  },
  {
    value: "senmai",
    label: "センマイ",
  },
  {
    value: "hachinosu",
    label: "ハチノス",
  },
  {
    value: "mino",
    label: "ミノ",
  },
  {
    value: "harami(sagari)",
    label: "ハラミ(サガリ)",
  },
  {
    value: "liver",
    label: "レバー",
  },
  {
    value: "himo(marucho)",
    label: "ヒモ(マルチョウ)",
  },
  {
    value: "shimacho",
    label: "シマチョウ",
  },
  {
    value: "mame",
    label: "マメ",
  },
];

interface ComboboxDemoProps {
  onChange?: (value: string) => void;
}

export function ComboboxDemo({ onChange }: ComboboxDemoProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleValueChange = (currentValue: string) => {
    const newValue = currentValue === value ? "" : currentValue;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
    setOpen(false);
  };

  return (
    <div className="relative">
      <input type="hidden" name="name" value={value} />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between font-bold text-gray-600"
          >
            {value
              ? frameworks.find((framework) => framework.label === value)?.label
              : "部位を選択..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="部位を選択..." className="h-9" />
            <CommandList>
              <CommandEmpty>その部位はありません</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.label}
                    onSelect={handleValueChange}
                  >
                    {framework.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === framework.label ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
