import React, { forwardRef, memo } from "react"
import style from "./textArea.module.css"
import clsx from "clsx"
import { ErrorMessage } from "@hookform/error-message"

type Props = {
  name: string
  errors?: Record<string, unknown>
  className?: string
  wrapperClassName?: string
  label?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    { name, label, errors, wrapperClassName, className, ...props }: Props,
    ref
  ) => {
    return (
      <div className={clsx([style.inputGroup, wrapperClassName])}>
        {label && (
          <label
            htmlFor={name}
            className={clsx(style.label, {
              [style.label_required]: props.required,
            })}
          >
            {label}
            {props?.required && <span className="text-rose-500">*</span>}
          </label>
        )}
        <textarea
          className={clsx("peer/input", {
            [className || ""]: !!className,
          })}
          ref={ref}
          name={name}
          {...props}
        />
        {errors && (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => {
              return (
                <span className="py-1 text-rose-500 text-xsmall-regular capitalize">
                  {message}
                </span>
              )
            }}
          />
        )}
      </div>
    )
  }
)

TextArea.displayName = "TextArea"

export default memo(TextArea)
