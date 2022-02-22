import { ReactElement } from "react";
import { ICharacter } from "../../models/api.interface";
import { statusColors } from "../helpers";
import Tag from "./Tag";

type ModalProps = {
  character: ICharacter | undefined;
  showModal: boolean;
  onClose: () => void;
};

function CloseIcon(): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function Modal({ character, showModal, onClose }: ModalProps): ReactElement {
  return showModal ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg flex flex-col w-screen md:w-128 bg-white">
            <div className="flex items-center justify-between py-3 px-5 border-b border-solid border-blueGray-200 rounded-t">
              <div className="flex space-x-2 items-center">
                <h3 className="text-3xl font-bold">{character?.name}</h3>
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
            <div className="relative flex space-x-2">
              <div
                className="w-1/2 bg-cover bg-center rounded-bl-md bg-no-repeat"
                style={{ backgroundImage: `url('${character?.image}')` }}
              />
              <div className="flex flex-col w-1/2 py-3 pl-1">
                <div className="flex space-x-2 items-center px-3">
                  <div className="font-bold">Status: </div>
                  <Tag
                    text={character?.status || "Unknown"}
                    className={statusColors(character?.status || "Unknown")}
                  />
                </div>
                <div className="px-3 pt-2">
                  <div className="font-bold">Last known location: </div>
                  {character?.location?.name || "Unknown"}
                </div>
                <div className="px-3 pt-2">
                  <div className="font-bold">Species: </div>
                  {character?.species || "Unknown"}
                </div>
                <div className="px-3 pt-2">
                  <div className="font-bold">Origin: </div>
                  {character?.origin.name || "Unknown"}
                </div>
                <div className="px-3 pt-2">
                  <div className="font-bold">Gender: </div>
                  {character?.gender || "Unknown"}
                </div>
                <div className="px-3 pt-2">
                  <div className="font-bold">First seen on: </div>
                  {character?.firstEpisode || "Unknown"}
                </div>
              </div>
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
