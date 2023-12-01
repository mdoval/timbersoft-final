interface ModalProps {
    modalOpen: boolean
    setModalOpen: (open: boolean) => boolean | void
    children: React.ReactNode
  }

  const ModalLg: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children}) => {
    return (
        <dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box max-w-none w-4/5 h-4/5">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setModalOpen(false)}>✕</button>
          </form>
          {children}
        </div>
      </dialog>
    )
}

export default ModalLg;