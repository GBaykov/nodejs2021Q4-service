

 export interface User  {
    id: string;
    name: string;
    login: string;
    password?: string;
  }

  export interface Column {
    id: string;
    title: string;
    order: number;
  }
  export interface Board {
    id: string;
    title: string;
    columns: Column[] | null;
  }
  
  export interface Task {
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string | null;
    columnId: string | null;
  }
  
  export type DB =[
      users: User[],
  boards: Board[],
  tasks: Task[]]
    
  