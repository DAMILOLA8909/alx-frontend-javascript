/// <reference path="./crud.d.ts" />

// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

/**
 * Display CRUD operations on the webpage
 */
function displayCRUDOperations(): void {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.fontFamily = 'Arial, sans-serif';

  // Title
  const title = document.createElement('h1');
  title.textContent = 'CRUD Operations Demo';
  title.style.color = '#333';
  title.style.borderBottom = '2px solid #333';
  title.style.paddingBottom = '10px';
  container.appendChild(title);

  // Create a row object with type RowElement
  const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
  };

  // Display initial row
  const initialRowDiv = document.createElement('div');
  initialRowDiv.style.border = '1px solid #4caf50';
  initialRowDiv.style.borderRadius = '8px';
  initialRowDiv.style.padding = '15px';
  initialRowDiv.style.margin = '10px 0';
  initialRowDiv.style.backgroundColor = '#e8f5e8';
  
  initialRowDiv.innerHTML = `
    <h3 style="margin: 0 0 10px 0; color: #2e7d32;">Initial Row:</h3>
    <pre style="background: #f1f8e9; padding: 10px; border-radius: 4px;">${JSON.stringify(row, null, 2)}</pre>
  `;
  container.appendChild(initialRowDiv);

  // Insert the row and get the new row ID
  const newRowID: RowID = CRUD.insertRow(row);
  
  const insertDiv = document.createElement('div');
  insertDiv.style.border = '1px solid #2196f3';
  insertDiv.style.borderRadius = '8px';
  insertDiv.style.padding = '15px';
  insertDiv.style.margin = '10px 0';
  insertDiv.style.backgroundColor = '#e3f2fd';
  
  insertDiv.innerHTML = `
    <h3 style="margin: 0 0 10px 0; color: #1976d2;">Insert Operation:</h3>
    <p><strong>New Row ID:</strong> ${newRowID}</p>
    <p><strong>Console Output:</strong> "Insert row ${JSON.stringify(row)}"</p>
  `;
  container.appendChild(insertDiv);

  // Create an updated row with age field
  const updatedRow: RowElement = { 
    firstName: 'Guillaume', 
    lastName: 'Salva', 
    age: 23 
  };

  const updateDiv = document.createElement('div');
  updateDiv.style.border = '1px solid #ff9800';
  updateDiv.style.borderRadius = '8px';
  updateDiv.style.padding = '15px';
  updateDiv.style.margin = '10px 0';
  updateDiv.style.backgroundColor = '#fff3e0';
  
  updateDiv.innerHTML = `
    <h3 style="margin: 0 0 10px 0; color: #f57c00;">Update Operation:</h3>
    <p><strong>Updated Row:</strong></p>
    <pre style="background: #fff8e1; padding: 10px; border-radius: 4px;">${JSON.stringify(updatedRow, null, 2)}</pre>
    <p><strong>Console Output:</strong> "Update row ${newRowID} ${JSON.stringify(updatedRow)}"</p>
  `;
  container.appendChild(updateDiv);

  // Update the row with the new data
  CRUD.updateRow(newRowID, updatedRow);

  // Delete the row
  const deleteDiv = document.createElement('div');
  deleteDiv.style.border = '1px solid #f44336';
  deleteDiv.style.borderRadius = '8px';
  deleteDiv.style.padding = '15px';
  deleteDiv.style.margin = '10px 0';
  deleteDiv.style.backgroundColor = '#ffebee';
  
  deleteDiv.innerHTML = `
    <h3 style="margin: 0 0 10px 0; color: #d32f2f;">Delete Operation:</h3>
    <p><strong>Row ID to delete:</strong> ${newRowID}</p>
    <p><strong>Console Output:</strong> "Delete row id ${newRowID}"</p>
  `;
  container.appendChild(deleteDiv);

  // Delete the row
  CRUD.deleteRow(newRowID);

  // Expected Results Section
  const expectedDiv = document.createElement('div');
  expectedDiv.style.border = '2px solid #673ab7';
  expectedDiv.style.borderRadius = '8px';
  expectedDiv.style.padding = '15px';
  expectedDiv.style.margin = '20px 0';
  expectedDiv.style.backgroundColor = '#ede7f6';
  
  expectedDiv.innerHTML = `
    <h3 style="margin: 0 0 15px 0; color: #512da8;">Expected Console Output:</h3>
    <div style="background: #f3e5f5; padding: 10px; border-radius: 4px; font-family: monospace;">
      Insert row {firstName: "Guillaume", lastName: "Salva"}<br>
      Update row ${newRowID} {firstName: "Guillaume", lastName: "Salva", age: 23}<br>
      Delete row id ${newRowID}
    </div>
  `;
  container.appendChild(expectedDiv);

  document.body.appendChild(container);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', displayCRUDOperations);

// Also log to console for verification
console.log('=== CRUD OPERATIONS ===');
const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);