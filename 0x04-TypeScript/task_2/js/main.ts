/**
 * TASK 2: Employee Management System with Interfaces and Classes
 * 
 * This implementation demonstrates:
 * - Interface definitions for different employee roles
 * - Class implementations with role-specific behaviors
 * - Factory pattern for employee creation
 * - Type predicates for runtime type checking
 * - Polymorphic behavior through interface contracts
 */

// ==================== INTERFACE DEFINITIONS ====================

/**
 * DirectorInterface: Contract for Director role capabilities
 * 
 * Defines the three required methods for Directors:
 * - workFromHome(): Remote work capability
 * - getCoffeeBreak(): Break privileges  
 * - workDirectorTasks(): Executive-level responsibilities
 * 
 * Interface segregation: Focuses only on Director-specific behaviors
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * TeacherInterface: Contract for Teacher role capabilities
 * 
 * Defines the three required methods for Teachers:
 * - workFromHome(): On-site work requirement
 * - getCoffeeBreak(): Limited break availability
 * - workTeacherTasks(): Educational responsibilities
 * 
 * Parallel structure to DirectorInterface but with different implementations
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// ==================== CLASS IMPLEMENTATIONS ====================

/**
 * Director: Implements executive-level employee behaviors
 * 
 * Represents high-level management with privileges:
 * - Can work remotely with flexibility
 * - Has coffee break privileges
 * - Handles director-level strategic tasks
 * 
 * Implements DirectorInterface ensuring contract compliance
 */
class Director implements DirectorInterface {
  /**
   * workFromHome: Directors have remote work flexibility
   * @returns string confirming remote work capability
   */
  workFromHome(): string {
    return 'Working from home';
  }

  /**
   * getCoffeeBreak: Directors have break privileges
   * @returns string indicating break availability
   */
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  /**
   * workDirectorTasks: Directors handle strategic responsibilities
   * @returns string describing executive task execution
   */
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

/**
 * Teacher: Implements educational employee behaviors
 * 
 * Represents teaching staff with specific constraints:
 * - Typically required to work on-site
 * - Limited break opportunities during work
 * - Focuses on educational task execution
 * 
 * Implements TeacherInterface ensuring contract compliance
 */
class Teacher implements TeacherInterface {
  /**
   * workFromHome: Teachers usually work on-site
   * @returns string indicating limited remote work capability
   */
  workFromHome(): string {
    return 'Cannot work from home';
  }

  /**
   * getCoffeeBreak: Teachers have constrained break times
   * @returns string indicating limited break availability
   */
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  /**
   * workTeacherTasks: Teachers focus on educational duties
   * @returns string describing teaching task execution
   */
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// ==================== FACTORY FUNCTION ====================

/**
 * createEmployee: Factory function for employee creation based on salary
 * 
 * Implements business logic for role assignment:
 * - Salary below 500: Creates Teacher (budget constraint)
 * - Salary 500 or above: Creates Director (investment in leadership)
 * - Accepts both number and string salary inputs
 * 
 * @param salary - Compensation amount determining employee role
 * @returns Director | Teacher instance based on salary threshold
 * 
 * Design Pattern: Factory Method pattern for object creation
 */
function createEmployee(salary: number | string): Director | Teacher {
  // Salary-based role assignment logic
  if (salary < 500) {
    return new Teacher();  // Lower budget = Teaching role
  } else {
    return new Director(); // Higher budget = Leadership role
  }
}

// ==================== TYPE PREDICATE AND WORK EXECUTION ====================

/**
 * isDirector: Type predicate function for runtime type checking
 * 
 * Type Predicate Features:
 * - Returns boolean indicating Director type
 * - Uses 'employee is Director' syntax for TypeScript type narrowing
 * - Enables intelligent type inference in conditional blocks
 * 
 * @param employee - Union type of Director | Teacher
 * @returns boolean - true if employee is Director instance
 * 
 * Type Safety: Enables compile-time type checking with runtime validation
 */
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

/**
 * executeWork: Polymorphic function for role-appropriate task execution
 * 
 * Implements behavior polymorphism:
 * - Uses isDirector type predicate for type-safe branching
 * - Executes Director tasks for leadership roles
 * - Executes Teacher tasks for educational roles
 * - Returns task-specific result strings
 * 
 * @param employee - Director | Teacher instance to execute work
 * @returns string - Result of the executed work tasks
 * 
 * Design Pattern: Strategy pattern for behavior variation
 */
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    // TypeScript knows employee is Director in this block
    return employee.workDirectorTasks();
  } else {
    // TypeScript knows employee is Teacher in this block
    return employee.workTeacherTasks();
  }
}

// ==================== TESTING AND DEMONSTRATION ====================

/**
 * displayEmployeeInfo: Visual demonstration of employee system functionality
 * 
 * Creates comprehensive UI showing:
 * - Employee creation based on different salary inputs
 * - Type predicate verification results
 * - Task execution outcomes
 * - Expected vs actual behavior validation
 * 
 * UI Design: Color-coded sections for different employee types
 */
function displayEmployeeInfo(): void {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.fontFamily = 'Arial, sans-serif';

  // Main title section
  const title = document.createElement('h1');
  title.textContent = 'Employee Management System';
  title.style.color = '#333';
  title.style.borderBottom = '2px solid #333';
  title.style.paddingBottom = '10px';
  container.appendChild(title);

  // Test cases section header
  const testCasesTitle = document.createElement('h2');
  testCasesTitle.textContent = 'Function Tests';
  testCasesTitle.style.color = '#333';
  testCasesTitle.style.marginTop = '30px';
  container.appendChild(testCasesTitle);

  // ========== TEACHER TEST CASE ==========
  
  /**
   * Teacher Test: Demonstrates low-salary employee creation
   * Expected: Teacher instance with specific behaviors
   */
  const teacherTest = document.createElement('div');
  teacherTest.style.border = '1px solid #ccc';
  teacherTest.style.borderRadius = '8px';
  teacherTest.style.padding = '15px';
  teacherTest.style.margin = '10px 0';
  teacherTest.style.backgroundColor = '#f9f9f9';
  
  const teacherEmployee = createEmployee(200);
  teacherTest.innerHTML = `
    <h3 style="margin: 0 0 10px 0; color: #d32f2f;">Low Salary: createEmployee(200)</h3>
    <p><strong>Employee Type:</strong> ${teacherEmployee.constructor.name}</p>
    <p><strong>isDirector Check:</strong> ${isDirector(teacherEmployee)}</p>
    <p><strong>executeWork Result:</strong> ${executeWork(teacherEmployee)}</p>
    <p><strong>Work Flexibility:</strong> ${teacherEmployee.workFromHome()}</p>
    <p><strong>Break Policy:</strong> ${teacherEmployee.getCoffeeBreak()}</p>
  `;
  container.appendChild(teacherTest);

  // ========== DIRECTOR TEST CASE ==========
  
  /**
   * Director Test: Demonstrates high-salary employee creation  
   * Expected: Director instance with privileged behaviors
   */
  const directorTest = document.createElement('div');
  directorTest.style.border = '1px solid #666';
  directorTest.style.borderRadius = '8px';
  directorTest.style.padding = '15px';
  directorTest.style.margin = '10px 0';
  directorTest.style.backgroundColor = '#e8f4fd';
  
  const directorEmployee = createEmployee(1000);
  directorTest.innerHTML = `
    <h3 style="margin: 0 0 10px 0; color: #1976d2;">High Salary: createEmployee(1000)</h3>
    <p><strong>Employee Type:</strong> ${directorEmployee.constructor.name}</p>
    <p><strong>isDirector Check:</strong> ${isDirector(directorEmployee)}</p>
    <p><strong>executeWork Result:</strong> ${executeWork(directorEmployee)}</p>
    <p><strong>Work Flexibility:</strong> ${directorEmployee.workFromHome()}</p>
    <p><strong>Break Policy:</strong> ${directorEmployee.getCoffeeBreak()}</p>
  `;
  container.appendChild(directorTest);

  // ========== VALIDATION SECTION ==========
  
  /**
   * Validation: Shows expected results from requirements specification
   * Verifies implementation matches assignment expectations
   */
  const validationSection = document.createElement('div');
  validationSection.style.border = '1px solid #4caf50';
  validationSection.style.borderRadius = '8px';
  validationSection.style.padding = '15px';
  validationSection.style.margin = '10px 0';
  validationSection.style.backgroundColor = '#e8f5e8';

  validationSection.innerHTML = `
    <h3 style="margin: 0 0 15px 0; color: #2e7d32;">Requirement Validation:</h3>
    <div style="background: #f1f8e9; padding: 10px; border-radius: 4px; margin: 10px 0;">
      <strong>executeWork(createEmployee(200)):</strong> ${executeWork(createEmployee(200))}
      <br><em>Expected: "Getting to work"</em>
    </div>
    <div style="background: #f1f8e9; padding: 10px; border-radius: 4px; margin: 10px 0;">
      <strong>executeWork(createEmployee(1000)):</strong> ${executeWork(createEmployee(1000))}
      <br><em>Expected: "Getting to director tasks"</em>
    </div>
    <p style="margin: 10px 0 0 0; font-style: italic; color: #555;">
      These results validate the assignment requirements are met correctly.
    </p>
  `;
  container.appendChild(validationSection);

  document.body.appendChild(container);
}

// ==================== CONSOLE VERIFICATION ====================

/**
 * Console Test Suite: Comprehensive verification of all functionality
 * 
 * Tests cover:
 * - Employee creation with various inputs
 * - Type predicate accuracy
 * - Task execution correctness
 * - Expected output validation
 */

console.log('=== EMPLOYEE CREATION VERIFICATION ===');
console.log('createEmployee(200):', createEmployee(200));        // Expected: Teacher
console.log('createEmployee(1000):', createEmployee(1000));      // Expected: Director

console.log('=== TYPE PREDICATE ACCURACY ===');
console.log('isDirector(createEmployee(200)):', isDirector(createEmployee(200)));    // Expected: false
console.log('isDirector(createEmployee(1000)):', isDirector(createEmployee(1000)));  // Expected: true

console.log('=== TASK EXECUTION VALIDATION ===');
console.log('executeWork(createEmployee(200)):', executeWork(createEmployee(200)));    // Expected: "Getting to work"
console.log('executeWork(createEmployee(1000)):', executeWork(createEmployee(1000)));  // Expected: "Getting to director tasks"

console.log('=== BEHAVIOR VERIFICATION ===');
const director = new Director();
const teacher = new Teacher();
console.log('Director workFromHome():', director.workFromHome());  // Expected: "Working from home"
console.log('Teacher workFromHome():', teacher.workFromHome());    // Expected: "Cannot work from home"

// ==================== INITIALIZATION ====================

/**
 * DOM Content Loaded Event Handler
 * 
 * Ensures safe DOM manipulation by waiting for full document load
 * Initializes the employee management system demonstration
 */
document.addEventListener('DOMContentLoaded', displayEmployeeInfo);