import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Element } from "@/types"



interface InventoryGridProps {
  inventoryItems: Element[]
  selectedItem: Element | null
  setSelectedItem: (item: Element) => void
}



const InventoryGrid: React.FC<InventoryGridProps> = ({
  inventoryItems,
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <ScrollArea className="h-64 whitespace-nowrap rounded-md">
      <div className="grid grid-cols-3 gap-2 pr-3">
        {inventoryItems.map((item) => (
          <div
            key={item.id}
            className={cn(
              "w-14 h-14 relative cursor-pointer flex items-center justify-center",
              selectedItem?.id === item.id && "bg-yellow-400"
            )}
            style={{
              backgroundImage: `url(/gameui/inventory/inventory_item_slot.png)`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => setSelectedItem(item)}
          >
            {item.image && (
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="p-0.5"


              />
            )}
          </div>
        ))}
      </div>
      <ScrollBar orientation="vertical" 
      scrollbarTrackImage="/gameui/inventory/inventory_scrollbar_track.png"
      scrollbarThumbImage="/gameui/inventory/inventory_scrollbar_thumb.png"/>
    </ScrollArea>
  )
}

export default InventoryGrid
