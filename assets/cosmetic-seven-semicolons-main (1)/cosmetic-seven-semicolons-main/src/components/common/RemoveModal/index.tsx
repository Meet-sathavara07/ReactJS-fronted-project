import Button from "@/components/common/Button"
import Modal from "@/modules/common/components/modal"
import React from "react"

type Props = {
  showModal: boolean
  closeModal: () => void
  removeItem: () => void
}

const RemoveModal = ({ showModal, closeModal, removeItem }: Props) => {
  return (
    <Modal size="small" isOpen={showModal} close={closeModal}>
      <p className="text-heading5 mb-4">Remove item?</p>
      <p className="text-caption1 text-gray-500">
        Are you sure you would like to remove?
      </p>

      <div className="mt-4 flex gap-4 items-center flex-wrap">
        <Button
          variant="colered"
          color="green"
          className=""
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button
          variant="colered"
          className=" !text-white duration-300"
          onClick={removeItem}
        >
          Remove
        </Button>
      </div>
    </Modal>
  )
}

export default RemoveModal
