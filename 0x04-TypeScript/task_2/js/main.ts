/**
 * TASK 2: Employee Management System
 * 
 * This file implements a complete employee management system using TypeScript features:
 * - Interfaces for defining employee contracts
 * - Classes implementing interface contracts
 * - Factory function for employee creation
 * - Type predicate for runtime type checking
 * - Polymorphic function for role-specific task execution
 */

// ==================== INTERFACE DEFINITIONS ====================

/**
 * DirectorInterface: Defines the contract for Director role
 * 
 * Specifies three required methods that must be implemented:
 * - workFromHome(): Remote work capability
 * - getCoffeeBreak(): Break privileges
 * - workDirectorTasks(): Executive-level responsibilities
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * TeacherInterface: Defines the contract for Teacher role
 * 
 * Specifies three required methods that must be implemented:
 * - workFromHome(): On-site work requirement
 * - getCoffeeBreak(): Limited break availability
 * - workTeacherTasks(): Educational responsibilities
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// ==================== CLASS IMPLEMENTATIONS ====================

/**
 * Director: Implements the DirectorInterface with executive privileges
 * 
 * Represents high-level management with flexible work arrangements
 * and break privileges. Handles strategic director-level tasks.
 */
class Director implements DirectorInterface {
  /**
   * workFromHome: Directors can work remotely
   * @returns String indicating remote work capability
   */
  workFromHome(): string {
    return 'Working from home';
  }

  /**
   * getCoffeeBreak: Directors have break privileges
   * @returns String indicating break availability
   */
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  /**
   * workDirectorTasks: Directors handle strategic responsibilities
   * @returns String describing executive task execution
   */
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

/**
 * Teacher: Implements the TeacherInterface with educational focus
 * 
 * Represents teaching staff with on-site work requirements
 * and limited break opportunities during instructional periods.
 */
class Teacher implements TeacherInterface {
  /**
   * workFromHome: Teachers typically work on-site
   * @returns String indicating limited remote work capability
   */
  workFromHome(): string {
    return 'Cannot work from home';
  }

  /**
   * getCoffeeBreak: Teachers have constrained break times
   * @returns String indicating limited break availability
   */
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  /**
   * workTeacherTasks: Teachers focus on educational duties
   * @returns String describing teaching task execution
   */
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// ==================== FACTORY FUNCTION ====================

/**
 * createEmployee: Factory function that creates employees based on salary
 * 
 * Business Logic:
 * - Salary below 500: Creates Teacher (budget-conscious hiring)
 * - Salary 500 or above: Creates Director (investment in leadership)
 * - Accepts both numeric and string salary inputs
 * 
 * @param salary - Compensation amount determining employee role
 * @returns Director | Teacher instance based on salary threshold
 */
function createEmployee(salary: number | string): Director | Teacher {
  // Simple salary-based role assignment
  if (salary < 500) {
    return new Teacher();  // Lower salary = Teaching role
  } else {
    return new Director(); // Higher salary = Leadership role
  }
}

// ==================== TYPE PREDICATE FUNCTION ====================

/**
 * isDirector: Type predicate function for runtime type checking
 * 
 * Type Predicate Features:
 * - Returns boolean indicating if employee is a Director
 * - Uses 'employee is Director' syntax for TypeScript type narrowing
 * - Enables intelligent type inference in conditional code blocks
 * 
 * @param employee - Union type of Director | Teacher to check
 * @returns boolean - true if employee is Director instance, false otherwise
 */
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// ==================== WORK EXECUTION FUNCTION ====================

/**
 * executeWork: Executes role-appropriate tasks based on employee type
 * 
 * Polymorphic Behavior:
 * - Uses isDirector type predicate for type-safe branching
 * - Executes workDirectorTasks() for Director instances
 * - Executes workTeacherTasks() for Teacher instances
 * - Returns task-specific result strings
 * 
 * @param employee - Director | Teacher instance to execute work
 * @returns string - Result of the executed work tasks
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

// ==================== STRING LITERAL TYPE AND TEACH CLASS FUNCTION ====================

/**
 * Subjects: String literal type restricting to specific subject values
 */
type Subjects = 'Math' | 'History';

/**
 * teachClass: Determines teaching message based on subject
 */
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// ==================== TESTING AND VERIFICATION ====================

/**
 * Test Suite: Validates all functions work as expected
 * 
 * Tests cover:
 * - Employee creation with various salary inputs
 * - Type predicate accuracy for role detection
 * - Task execution correctness for each role
 * - Subject teaching functionality
 * - Expected output matching requirements
 */

console.log('=== EMPLOYEE CREATION TESTS ===');
console.log('createEmployee(200):', createEmployee(200));        // Expected: Teacher instance
console.log('createEmployee(1000):', createEmployee(1000));      // Expected: Director instance
console.log('createEmployee(\'$500\'):', createEmployee('$500')); // Expected: Director instance

console.log('=== TYPE PREDICATE TESTS ===');
console.log('isDirector(createEmployee(200)):', isDirector(createEmployee(200)));    // Expected: false (Teacher)
console.log('isDirector(createEmployee(1000)):', isDirector(createEmployee(1000)));  // Expected: true (Director)

console.log('=== TASK EXECUTION TESTS ===');
console.log('executeWork(createEmployee(200)):', executeWork(createEmployee(200)));    // Expected: "Getting to work"
console.log('executeWork(createEmployee(1000)):', executeWork(createEmployee(1000)));  // Expected: "Getting to director tasks"

console.log('=== TEACH CLASS TESTS ===');
console.log('teachClass(\'Math\'):', teachClass('Math'));        // Expected: "Teaching Math"
console.log('teachClass(\'History\'):', teachClass('History'));  // Expected: "Teaching History"

console.log('=== BEHAVIOR VERIFICATION ===');
const testDirector = new Director();
const testTeacher = new Teacher();
console.log('Director workFromHome():', testDirector.workFromHome());  // Expected: "Working from home"
console.log('Teacher workFromHome():', testTeacher.workFromHome());    // Expected: "Cannot work from home"