import React from "react";

export default function Modal({ showModal, handleCloseModal }) {
  return (
    showModal && (
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-sm bg-white">
          <div className="w-full">
            <div className="m-6 my-20 max-w-[400px] mx-auto">
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-extrabold text-center">Usuario creado exitosamente</h2>
              </div>
                <button
                  className="p-3 bg-black text-white w-full font-semibold"
                  onClick={handleCloseModal}
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
    )
  );
};



