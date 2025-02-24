import { cn } from "@/lib/utils"
import { useState } from "react"
import Image from "next/image"

export interface EquipedItemProps {
    id: string
    name: string
    icon: string
}


export interface EquipedBarProps {
    equippedItems: EquipedItemProps[]
    onSelectItem: (item: EquipedItemProps) => void
}




export default function EquipedBar({ equippedItems, onSelectItem }: EquipedBarProps) {
    const [selectedItem, setSelectedItem] = useState<EquipedItemProps | null>(null)

    const handleSelectItem = (item: EquipedItemProps) => {
        setSelectedItem(item)
        onSelectItem(item)
    }
    return (

        <div className="flex flex-col">

            <h2 className="text-[#ff3366] text-[26px] mb-1">Equipped</h2>
            <div
                className="relative h-full"
                style={{
                    backgroundImage: `url(/gameui/inventory/equipped_section.png)`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "145px",
                }}
            >
                <div className="flex justify-center items-center mt-16 gap-2">
                    {equippedItems.map((item) => (
                        <div
                            key={item.id}
                            className={cn(
                                "w-14 h-14 relative cursor-pointer flex items-center justify-center",
                                selectedItem?.id === item.id && "bg-red-500"
                            )}
                            style={{
                                backgroundImage: `url(/gameui/inventory/inventory_item_slot.png)`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat"
                            }}
                            onClick={() => handleSelectItem(item)}
                        >
                            {item.icon && (
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    fill
                                    sizes="100%"

                                    className="p-0.5"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
