export interface TaskData {
    id: number;
    title: string;
    createdDate: Date;
    description: string;
    priority: string;
    column: column_type;
  }
  

  export enum column_type  {
    pending = 'pending',
    in_process = 'in_process',
    completed = 'completed'
  }

export class Task implements TaskData{
    id: number;
    title: string;
    createdDate: Date;
    description: string;
    priority: string;
    column: column_type;

    constructor(data: TaskData) {
        this.title = data.title;
        this.createdDate = data.createdDate;
        this.description = data.description;
        this.priority = data.priority;
        this.id = data.id;
        this.column = data.column;
    }
}