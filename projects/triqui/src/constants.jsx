import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faO } from "@fortawesome/free-solid-svg-icons";

export const TURNS = {
  X: <FontAwesomeIcon icon={faXmark} className="text-purple-500 w-6 h-6" />,
  O: <FontAwesomeIcon icon={faO} className="text-red-500 w-6 h-6" />,
};
   
export const winner_combinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
    [0, 4, 8], [2, 4, 6], //diagonals
]