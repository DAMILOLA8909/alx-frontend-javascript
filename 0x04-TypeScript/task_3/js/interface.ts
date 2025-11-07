/**
 * RowID: Type alias for row identifier
 * Represents a unique identifier for database rows
 */
type RowID = number;

/**
 * RowElement: Interface defining the structure of a row
 * Contains personal information with optional age field
 */
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

// Export the type and interface for use in other files
export { RowID, RowElement };