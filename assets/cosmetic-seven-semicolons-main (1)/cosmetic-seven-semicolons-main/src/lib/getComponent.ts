import Input from "@/components/common/formElements/Input"
import TextArea from "@/components/common/formElements/TextArea"
import RatingInput from "@/components/products/RatingInput"
import { Select } from "@medusajs/ui"

export default (input: string) => {
  switch (input) {
    case "Select":
      return Select
    case "TextArea":
      return TextArea
    case "Rating":
      return RatingInput
    default:
      return Input
  }
}
