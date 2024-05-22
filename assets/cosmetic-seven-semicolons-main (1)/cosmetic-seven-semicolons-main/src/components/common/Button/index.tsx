import React, { cloneElement, memo } from "react"
import Image from "next/image"
import clsx from "clsx"
import styles from "./button.module.css"
import LoadingSpinner from "../LoadingSpinner"

type Props = {
  prefix?: React.JSX.Element
  suffix?: React.JSX.Element
  className?: any
  title?: string
  isLoading?: boolean
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" })
) &
  (
    | {
        variant?: "colered"
      }
    | {
        variant?: "hover"
      }
    | {
        variant?: "transparent"
      }
    | {
        variant?: "rare"
      }
    | {
        variant?: "shopbtn"
      }
  )

function Button({
  isLoading,
  variant,
  color,
  prefix: Prefix,
  suffix: Suffix,
  as: As = "button",
  className,
  title,
  ...props
}: Props) {
  return (
    <As
      className={clsx(
        styles.btn,
        {
          [styles[`btn--colered`]]: variant === "colered",
          [styles[`btn--hover`]]: variant === "hover",
          [styles[`btn--transparent`]]: variant === "transparent",
          [styles[`btn--rare`]]: variant === "rare",
          [styles[`btn--shopbtn`]]: variant === "shopbtn",
        },
        className
      )}
      {...props}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {Prefix &&
            cloneElement(<Prefix />, {
              height: 24,
              width: 24,
            })}
          {props.children}
          {Suffix &&
            cloneElement(<Suffix />, {
              height: 24,
              width: 24,
            })}
        </>
      )}
      {title && <span className="sr-only">{title}</span>}
    </As>
  )
}

export default memo(Button)
