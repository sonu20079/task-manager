import { column_type, Task } from './task';

export const COLUMNS = [{id: 1, name: 'Pending', tasks: [], type: column_type.pending},
{id: 2, name: 'In Process', tasks: [], type: column_type.in_process},
{id: 3, name: 'Completed', tasks: [], type: column_type.completed}
]

export class Column {
    id: number;
    type: column_type;
    name: string;
    tasks: Task[];
}