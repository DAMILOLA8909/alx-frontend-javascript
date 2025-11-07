// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Declare the CRUD functions with proper types
declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): number;