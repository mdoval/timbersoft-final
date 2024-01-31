"use client";

import { ChangeEvent, FormEventHandler, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { addUser } from "@/utils/usersFunctions";
import { IUser } from "@/types/tipos";

export function AddUser() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<IUser>({ name: "", email: "", password: "" });
  const [botonHabilitado, setBotonHabilitado] = useState(false);

  const handleSubmitNewUser: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      await addUser(newUser);
      setNewUser({ name: "", email: "", password: ""});
      setModalOpen(false);
      router.refresh();
    } catch (error) {
      console.log("No se pudo guardar el Usuario");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    const campo = e.target.name
    setNewUser({...newUser, [campo]: valor})
    setBotonHabilitado(valor.trim() !== "");
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
        Crear Usuario
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewUser}>
          <div className="modal-action">
            <div className="flex flex-col space-y-5 w-full">
              <h3 className="font-bold text-lg">Agregar Usuario</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Ingrese el nombre de usuario
                  </span>
                </div>
                <input
                  name="name"
                  value={newUser.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Nombre de usuario"
                  className="input input-bordered w-full"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Ingrese Correo Electronico
                  </span>
                </div>
                <input
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Contraseña
                  </span>
                </div>
                <input
                  name="password"
                  value={newUser.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
              </label>


              <button
                type="submit"
                className="btn btn-primary"
                disabled={!botonHabilitado}
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
