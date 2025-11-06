/**
 * TASK 2: Employee Management System with Interfaces and Classes
 * 
 * This file demonstrates:
 * - Interface definitions for different employee roles
 * - Class implementations with specific behaviors
 * - Factory function for creating employees based on salary
 * - Union types for flexible function parameters
 */

// ==================== INTERFACE DEFINITIONS ====================

/**
 * DirectorInterface: Defines the contract for Director objects
 * 
 * Methods:
 * - workFromHome(): Specific working location for directors
 * - getCoffeeBreak(): Break behavior for directors  
 * - workDirectorTasks(): Specific task execution for directors
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * TeacherInterface: Defines the contract for Teacher objects
 * 
 * Methods:
 * - workFromHome(): Specific working location for teachers
 * - getCoffeeBreak(): Break behavior for teachers
 * - workTeacherTasks(): Specific task execution for teachers
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// ==================== CLASS IMPLEMENTATIONS ====================

/**
 * Director: Implements DirectorInterface with director-specific behaviors
 * 
 * Director Behavior:
 * - Can work from home
 * - Can take coffee breaks
 * - Performs director-specific tasks
 */
class Director implements DirectorInterface {
  /**
   * workFromHome: Directors can work remotely
   * @returns string indicating working from home
   */
  workFromHome(): string {
    return 'Working from home';
  }

  /**
   * getCoffeeBreak: Directors are allowed breaks
   * @returns string indicating taking a coffee break
   */
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  /**
   * workDirectorTasks: Directors perform high-level tasks
   * @returns string indicating performing director tasks
   */
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

/**
 * Teacher: Implements TeacherInterface with teacher-specific behaviors
 * 
 * Teacher Behavior:
 * - Cannot work from home
 * - Cannot take breaks during work
 * - Performs teaching-specific tasks
 */
class Teacher implements TeacherInterface {
  /**
   * workFromHome: Teachers typically work on-site
   * @returns string indicating cannot work from home
   */
  workFromHome(): string {
    return 'Cannot work from home';
  }

  /**
   * getCoffeeBreak: Teachers have limited break time
   * @returns string indicating cannot take breaks
   */
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  /**
   * workTeacherTasks: Teachers perform educational tasks
   * @returns string indicating performing teaching work
   */
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// ==================== FACTORY FUNCTION ====================

function createEmployee(salary: number | string): Director | Teacher {
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// ==================== TESTING AND DEMONSTRATION ====================

/**
 * displayEmployeeInfo: Demonstrates the createEmployee function and employee behaviors
 * 
 * Shows:
 * - Employee creation based on different salary inputs
 * - Method behaviors for each employee type
 * - Type-specific task execution
 */
function displayEmployeeInfo(): void {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.fontFamily = 'Arial, sans-serif';

  // Title
  const title = document.createElement('h1');
  title.textContent = 'Employee Management System';
  title.style.color = '#333';
  title.style.borderBottom = '2px solid #333';
  title.style.paddingBottom = '10px';
  container.appendChild(title);

  // Test Cases Section
  const testCasesTitle = document.createElement('h2');
  testCasesTitle.textContent = 'createEmployee Test Cases';
  testCasesTitle.style.color = '#333';
  testCasesTitle.style.marginTop = '30px';
  container.appendChild(testCasesTitle);

  // Test case 1: Low salary (Teacher)
  const test1 = document.createElement('div');
  test1.style.border = '1px solid #ccc';
  test1.style.borderRadius = '8px';
  test1.style.padding = '15px';
  test1.style.margin = '10px 0';
  test1.style.backgroundColor = '#f9f9f9';
  
  const employee1 = createEmployee(200);
  test1.innerHTML = `
    <h3 style="margin: 0 0 10px 0; color: #d32f2f;">Test 1: createEmployee(200)</h3>
    <p><strong>Employee Type:</strong> ${employee1.constructor.name}</p>
    <p><strong>workFromHome():</strong> ${employee1.workFromHome()}</p>
    <p><strong>getCoffeeBreak():</strong> ${employee1.getCoffeeBreak()}</p>
    <p><strong>Tasks:</strong> ${employee1 instanceof Teacher ? employee1.workTeacherTasks() : employee1.workDirectorTasks()}</p>
  `;
  container.appendChild(test1);

  // Test case 2: High salary (Director)
  const test2 = document.createElement('div');
  test2.style.border = '1px solid #666';
  test2.style.borderRadius = '8px';
  test2.style.padding = '15px';
  test2.style.margin = '10px 0';
  test2.style.backgroundColor = '#e8f4fd';
  
  const employee2 = createEmployee(1000);
  test2.innerHTML = `
    <h3 style="margin: 0 0 10px 0; color: #1976d2;">Test 2: createEmployee(1000)</h3>
    <p><strong>Employee Type:</strong> ${employee2.constructor.name}</p>
    <p><strong>workFromHome():</strong> ${employee2.workFromHome()}</p>
    <p><strong>getCoffeeBreak():</strong> ${employee2.getCoffeeBreak()}</p>
    <p><strong>Tasks:</strong> ${employee2 instanceof Teacher ? employee2.workTeacherTasks() : employee2.workDirectorTasks()}</p>
  `;
  container.appendChild(test2);

  // Test case 3: String salary (Director)
  const test3 = document.createElement('div');
  test3.style.border = '1px solid #666';
  test3.style.borderRadius = '8px';
  test3.style.padding = '15px';
  test3.style.margin = '10px 0';
  test3.style.backgroundColor = '#e8f4fd';
  
  const employee3 = createEmployee('$500');
  test3.innerHTML = `
    <h3 style="margin: 0 0 10px 0; color: #1976d2;">Test 3: createEmployee('$500')</h3>
    <p><strong>Employee Type:</strong> ${employee3.constructor.name}</p>
    <p><strong>workFromHome():</strong> ${employee3.workFromHome()}</p>
    <p><strong>getCoffeeBreak():</strong> ${employee3.getCoffeeBreak()}</p>
    <p><strong>Tasks:</strong> ${employee3 instanceof Teacher ? employee3.workTeacherTasks() : employee3.workDirectorTasks()}</p>
  `;
  container.appendChild(test3);

  // Method Comparison Section
  const comparisonTitle = document.createElement('h2');
  comparisonTitle.textContent = 'Method Behavior Comparison';
  comparisonTitle.style.color = '#333';
  comparisonTitle.style.marginTop = '30px';
  container.appendChild(comparisonTitle);

  const comparisonDiv = document.createElement('div');
  comparisonDiv.style.border = '1px solid #ddd';
  comparisonDiv.style.borderRadius = '8px';
  comparisonDiv.style.padding = '15px';
  comparisonDiv.style.margin = '10px 0';
  comparisonDiv.style.backgroundColor = '#fffde7';

  const director = new Director();
  const teacher = new Teacher();

  comparisonDiv.innerHTML = `
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background-color: #f5f5f5;">
          <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Method</th>
          <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Director</th>
          <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Teacher</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">workFromHome()</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${director.workFromHome()}</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${teacher.workFromHome()}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">getCoffeeBreak()</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${director.getCoffeeBreak()}</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${teacher.getCoffeeBreak()}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Tasks</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${director.workDirectorTasks()}</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${teacher.workTeacherTasks()}</td>
        </tr>
      </tbody>
    </table>
  `;
  container.appendChild(comparisonDiv);

  document.body.appendChild(container);
}

// ==================== CONSOLE VERIFICATION ====================

/**
 * Console tests to verify the implementation matches expected results
 */
console.log('=== createEmployee FUNCTION TESTS ===');
console.log('createEmployee(200):', createEmployee(200)); // Should be Teacher
console.log('createEmployee(1000):', createEmployee(1000)); // Should be Director  
console.log('createEmployee(\'$500\'):', createEmployee('$500')); // Should be Director

console.log('=== DIRECTOR METHOD TESTS ===');
const directorTest = new Director();
console.log('Director workFromHome():', directorTest.workFromHome());
console.log('Director getCoffeeBreak():', directorTest.getCoffeeBreak());
console.log('Director workDirectorTasks():', directorTest.workDirectorTasks());

console.log('=== TEACHER METHOD TESTS ===');
const teacherTest = new Teacher();
console.log('Teacher workFromHome():', teacherTest.workFromHome());
console.log('Teacher getCoffeeBreak():', teacherTest.getCoffeeBreak());
console.log('Teacher workTeacherTasks():', teacherTest.workTeacherTasks());

// ==================== INITIALIZATION ====================

// Initialize the display when DOM is loaded
document.addEventListener('DOMContentLoaded', displayEmployeeInfo);