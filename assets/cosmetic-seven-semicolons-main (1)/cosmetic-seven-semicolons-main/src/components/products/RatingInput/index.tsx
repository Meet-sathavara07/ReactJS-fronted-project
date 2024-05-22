"use client"
import { useState } from "react"
import StarIcon from "@/public/icons/star.svg"
import clsx from "clsx"
import Button from "@/components/common/Button"
import { useController } from "react-hook-form"

const Rating = ({ name, control }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: 4,
  })

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((x) => (
        <Button
          variant="icon"
          key={x}
          onClick={(e) => {
            e.preventDefault()
            onChange(x)
          }}
        >
          <StarIcon
            key={x}
            className={clsx("h-5 w-5 flex-shrink-0", {
              ["text-red"]: x <= value,
              ["text-white"]: x > value,
            })}
            aria-hidden="true"
          />
        </Button>
      ))}
    </div>
  )
}

export default Rating
