import React, { cloneElement, memo } from "react"
import { useForm } from "react-hook-form"
import getComponent from "@/lib/getComponent"

const Form = ({
  fields,
  defaultValues,
  onSubmit,
  children,
  variant,
  color,
  className,
  title,
}) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    mode: "all",
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      {fields?.map(({ input, ...field }) => {
        const Component = getComponent(input)
        return (
          <Component
            key={field.name}
            color={color}
            variant={variant}
            {...field}
            control={control}
          />
        )
      })}
      <div className="flex gap-4 flex-wrap items-center">
        {React.Children.map(children, (child, index) => {
          return cloneElement(
            child,
            {
              disabled:
                (!isValid || isSubmitting) && child?.props?.type === "submit",
              key: { index },
              onClick:
                child?.props?.type === "reset"
                  ? () => reset()
                  : child?.props?.onClick,
            },
            isSubmitting && child?.props?.type === "reset"
              ? "Loading..."
              : child?.props?.children
          )
        })}
      </div>
    </form>
  )
}

export default memo(Form)
