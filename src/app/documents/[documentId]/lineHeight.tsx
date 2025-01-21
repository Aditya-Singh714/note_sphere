import { useEditorStore } from "@/store/use-editor-store";
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ListChecksIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const LineHeightButton = () => {
    const { editor } = useEditorStore();

    const lineHeights = [
        {
            label: "Default",
            value: "normal",
        },
        {
            label: "Single",
            value: "1",
        },
        {
            label: "1.15",
            value: "1.15",
        },
        {
            label: "1.25",
            value: "1.25",
        },
        {
            label: "1.5",
            value: "1.5",
        },
        {
            label: "1.75",
            value: "1.75",
        },
        {
            label: "Double",
            value: "2",
        },
        {
            label: "2.5",
            value: "2.5",
        },
        {
            label: "Triple",
            value: "3",
        }        
    ];

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                 className="h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80" 
                >
                    <ListChecksIcon className="size-4" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
                {lineHeights.map(({ label, value}) => (
                    <button
                     key={value}
                     onClick={() => editor?.chain().focus().setLineHeight(value).run()}
                     className={cn(
                        "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                        editor?.getAttributes("paragraph").lineHeight === value && "bg-neutral-200/80"
                     )}
                    >
                        <span className="text-xm">{label}</span>
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}