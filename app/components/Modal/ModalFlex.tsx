interface ModalProps {
    modalOpen: boolean
    setModalOpen: (open: boolean) => boolean | void
    children: React.ReactNode
    w: string
    h: string
  }

  const ModalFlex: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children, w , h}) => {
    return (
        <dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className={`modal-box max-w-none w-${w} h-${h}`}>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setModalOpen(false)}>✕</button>
          </form>
          {children}
        </div>
      </dialog>
    )
}

export default ModalFlex;