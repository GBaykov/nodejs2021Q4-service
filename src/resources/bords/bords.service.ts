import { IBoard } from '../../types';
import * as boardsRepo from './bords.memory.repository';

/**
 * Returns all Boards in the repo (Promise)
 * @returns All Boards (Promise)
 */
export const getAll = () => boardsRepo.getAll();

/**
 * Returns Board by id (Promise)
 * @param id - id of board for search.
 * @returns board or error message (Promise)
 */
export const getBoard = (id: string) => boardsRepo.getBoard(id);

  /**
 * Adds the Board to repository
 * @param data - board to be added.
 * @returns added board or error message (Promise)
 */
export const addBoard = (data:IBoard) => boardsRepo.addBoard(data);

/**
 * Update the Board in repository
 * @param id - id of the board to be updated.
 * @param data - new data for updating board
 * @returns updated board or error message (Promise)
 */
export const updateBoard = (id: string, data: IBoard) => boardsRepo.updateBoard(id, data);

/**
 * Delete the Board in repository
 * @param id - id of the board to be deleted.
 * @returns status code (202) or error message (Promise)
 */
export const deleteBoard = (id: string) => boardsRepo.deleteBoard(id);

