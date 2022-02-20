import { ReactElement } from "react";
import { ICharacter } from "../../models/api.interface";

type ModalProps = {
  character: ICharacter | undefined;
  showModal: boolean;
  onClose: () => void;
};

function CloseIcon(): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
    </svg>
  );
}

function Modal({ character, showModal, onClose }: ModalProps): ReactElement {
  return showModal ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <div className="flex space-x-5 items-center">
                <h3 className="text-3xl font-bold">{character?.name}</h3>
                {/* <span className="animate-ping h-3 w-3 rounded-full bg-sky-400 opacity-75" /> */}
              </div>
              <button
                type="button"
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-3 float-right text-3xl font-semibold cursor-pointer"
                onClick={() => onClose()}
              >
                <span className="bg-transparent text-black h-6 w-6 text-2xl block">
                  <CloseIcon />
                </span>
              </button>
            </div>
            <div className="relative p-6">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                I always felt like I could do anything. Thats the main thing
                people are controlled by! Thoughts- their perception of
                themselves!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-75 fixed inset-0 z-40 bg-black" />
    </>
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <></>
  );
}

export default Modal;
