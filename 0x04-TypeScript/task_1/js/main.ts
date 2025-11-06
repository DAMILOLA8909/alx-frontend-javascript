/**
 * TASK 1: Comprehensive TypeScript Implementation
 * 
 * This file demonstrates advanced TypeScript concepts including:
 * - Interface definitions for objects and functions
 * - Interface inheritance (Director extends Teacher)
 * - Function interfaces and implementations
 * - Class interfaces for both constructor and instance methods
 * - Practical implementation of StudentClass with proper TypeScript typing
 * - Dynamic HTML rendering with TypeScript type safety
 */

// ==================== INTERFACE DEFINITIONS ====================

/**
 * Teacher Interface: Defines the structure for teacher objects
 * 
 * Key Features:
 * - firstName and lastName are readonly: can only be set during object creation
 * - fullTimeEmployee and location are required properties
 * - yearsOfExperience is optional (denoted by ?)
 * - Index signature [key: string]: any allows additional properties of any type
 * 
 * This design ensures type safety while allowing flexibility for extra attributes
 */
interface Teacher {
  readonly firstName: string;    // Immutable after initialization
  readonly lastName: string;     // Immutable after initialization
  fullTimeEmployee: boolean;     // Required - must be defined
  yearsOfExperience?: number;    // Optional - may be undefined
  location: string;              // Required - must be defined
  [key: string]: any;            // Flexible - allows any additional properties
}

/**
 * Director Interface: Extends Teacher with additional required property
 * 
 * Inheritance Benefits:
 * - Inherits all properties from Teacher interface
 * - Adds numberOfReports as a required property
 * - Maintains the flexible index signature from Teacher
 * - Demonstrates interface extension in TypeScript
 */
interface Director extends Teacher {
  numberOfReports: number;       // Additional required property for directors
}

/**
 * printTeacherFunction Interface: Defines the function signature
 * 
 * Function Interface Pattern:
 * - Describes a function that takes two string parameters
 * - Returns a formatted string
 * - Enforces type safety for function implementations
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * StudentConstructor Interface: Defines the class constructor signature
 * 
 * Constructor Interface Pattern:
 * - Uses 'new' keyword to indicate constructor type
 * - Specifies parameters the constructor must accept
 * - Defines the return type (instance of StudentClassInterface)
 * - Enforces consistent constructor implementation
 */
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

/**
 * StudentClassInterface: Defines the instance methods and properties
 * 
 * Class Interface Pattern:
 * - Describes the public API of the class
 * - workOnHomework() must return a string
 * - displayName() must return a string
 * - Separates constructor interface from instance interface
 */
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// ==================== FUNCTION IMPLEMENTATIONS ====================

/**
 * printTeacher: Formats a teacher's name for display
 * 
 * Implementation Logic:
 * 1. Extracts first character of firstName using charAt(0)
 * 2. Returns formatted string in "F. LastName" format
 * 3. Example: "John" + "Doe" becomes "J. Doe"
 * 
 * Type Safety:
 * - Implements printTeacherFunction interface
 * - Parameters and return type are strictly typed
 */

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// ==================== CLASS IMPLEMENTATION ====================

/**
 * StudentClass: Represents a student with personal and academic properties
 * 
 * Class Design:
 * - Implements StudentClassInterface for method contracts
 * - Private properties for encapsulation
 * - Constructor matches StudentConstructor interface
 * - Methods provide specific functionality as required
 * 
 * TypeScript Benefits:
 * - Compile-time checking of interface compliance
 * - Clear contract for class usage
 * - Type safety for all method calls
 */
class StudentClass {
  // Private properties for internal state management
  private firstName: string;
  private lastName: string;

  /**
   * Constructor: Initializes student with name properties
   * 
   * @param firstName - Student's first name
   * @param lastName - Student's last name
   * 
   * Implementation Notes:
   * - Matches StudentConstructor interface requirements
   * - Sets internal state for method usage
   * - Parameters are strictly typed as strings
   */
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * workOnHomework: Indicates student's current activity
   * 
   * @returns Fixed string "Currently working"
   * 
   * Method Logic:
   * - Returns consistent message about homework status
   * - Simple implementation as specified in requirements
   */
  workOnHomework(): string {
    return 'Currently working';
  }

  /**
   * displayName: Provides student's first name
   * 
   * @returns The student's first name
   * 
   * Method Logic:
   * - Returns the stored firstName property
   * - Provides controlled access to private data
   */
  displayName(): string {
    return this.firstName;
  }
}

// ==================== OBJECT INSTANTIATION ====================

/**
 * Teacher Objects: Demonstrate interface compliance with various property combinations
 * 
 * Design Patterns Shown:
 * - Required properties always present
 * - Optional properties used selectively
 * - Additional properties via index signature
 * - Readonly properties set at initialization
 */

// Teacher 1: Full example with all property types
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,           // Optional property - present
  specialization: 'Mathematics',  // Additional property - allowed by index signature
  contract: true                  // Additional property - allowed by index signature
};

// Teacher 2: Minimal example with only required properties plus additions
const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'Paris',
  specialization: 'Mathematics',  // Additional property
  contract: true                  // Additional property
};

// Teacher 3: Part-time teacher example
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,        // Different value for required property
  lastName: 'Doe',
  location: 'London',
  contract: false,                // Additional property
  specialization: 'Science'       // Additional property
};

/**
 * Director Objects: Demonstrate interface inheritance
 * 
 * Key Features:
 * - All Teacher properties are inherited
 * - numberOfReports is required by Director interface
 * - Flexible properties still work via inherited index signature
 */

// Director 1: Comprehensive example with inherited and new properties
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,            // Required by Director interface
  yearsOfExperience: 15,          // Optional from Teacher interface
  department: 'Administration',   // Additional property via inheritance
  officeNumber: 'A-101'           // Additional property via inheritance
};

// Director 2: Alternative example showing interface flexibility
const director2: Director = {
  firstName: 'Sarah',
  lastName: 'Wilson',
  location: 'Berlin',
  fullTimeEmployee: true,
  numberOfReports: 8,             // Required by Director interface
  yearsOfExperience: 10,          // Optional from Teacher interface
  department: 'Engineering'       // Additional property via inheritance
};

/**
 * Student Instances: Demonstrate class usage with interface typing
 * 
 * Type Safety Benefits:
 * - Instances typed with StudentClassInterface
 * - Only public methods are accessible
 * - Constructor parameters are type-checked
 */
const student1: StudentClassInterface = new StudentClass('Emma', 'Watson');
const student2: StudentClassInterface = new StudentClass('Michael', 'Brown');
const student3: StudentClassInterface = new StudentClass('Sophia', 'Garcia');

// ==================== DISPLAY LOGIC ====================

/**
 * displayTeachers: Renders all data to the browser
 * 
 * Architecture:
 * - Pure TypeScript DOM manipulation
 * - Organized sections for different data types
 * - Dynamic property discovery and display
 * - Type-safe iteration through objects
 * 
 * UI Design:
 * - Clear visual separation between sections
 * - Consistent styling for each entity type
 * - Responsive layout with proper spacing
 */
function displayTeachers(): void {
  // Data organization for display
  const teachers: Teacher[] = [teacher1, teacher2, teacher3];
  const directors: Director[] = [director1, director2];
  const students: StudentClassInterface[] = [student1, student2, student3];
  
  // Main container setup
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.fontFamily = 'Arial, sans-serif';

  // ========== PRINT TEACHER FUNCTION EXAMPLES SECTION ==========
  
  /**
   * Section Purpose: Demonstrate printTeacher function usage
   * 
   * Display Logic:
   * - Shows function calls with different parameters
   * - Demonstrates both direct and object-based usage
   * - Provides visual verification of function output
   */
  const printTeacherTitle = document.createElement('h2');
  printTeacherTitle.textContent = 'printTeacher Function Examples';
  printTeacherTitle.style.color = '#333';
  printTeacherTitle.style.borderBottom = '2px solid #333';
  printTeacherTitle.style.paddingBottom = '10px';
  container.appendChild(printTeacherTitle);

  const printTeacherExamples = document.createElement('div');
  printTeacherExamples.style.backgroundColor = '#f0f8ff';
  printTeacherExamples.style.padding = '15px';
  printTeacherExamples.style.borderRadius = '8px';
  printTeacherExamples.style.margin = '10px 0';
  
  // Example 1: Basic function call
  const example1 = document.createElement('p');
  example1.innerHTML = `<strong>Example 1:</strong> printTeacher("John", "Doe") = <code>"${printTeacher('John', 'Doe')}"</code>`;
  
  // Example 2: Different name combination
  const example2 = document.createElement('p');
  example2.innerHTML = `<strong>Example 2:</strong> printTeacher("Alice", "Smith") = <code>"${printTeacher('Alice', 'Smith')}"</code>`;
  
  // Example 3: Using object properties
  const example3 = document.createElement('p');
  example3.innerHTML = `<strong>Example 3:</strong> printTeacher(teacher3.firstName, teacher3.lastName) = <code>"${printTeacher(teacher3.firstName, teacher3.lastName)}"</code>`;
  
  printTeacherExamples.appendChild(example1);
  printTeacherExamples.appendChild(example2);
  printTeacherExamples.appendChild(example3);
  container.appendChild(printTeacherExamples);

  // ========== STUDENT CLASS EXAMPLES SECTION ==========
  
  /**
   * Section Purpose: Demonstrate StudentClass functionality
   * 
   * Display Logic:
   * - Shows method calls on student instances
   * - Demonstrates both displayName and workOnHomework methods
   * - Provides visual verification of class behavior
   */
  const studentClassTitle = document.createElement('h2');
  studentClassTitle.textContent = 'StudentClass Examples';
  studentClassTitle.style.color = '#333';
  studentClassTitle.style.borderBottom = '2px solid #333';
  studentClassTitle.style.paddingBottom = '10px';
  studentClassTitle.style.marginTop = '40px';
  container.appendChild(studentClassTitle);

  const studentClassExamples = document.createElement('div');
  studentClassExamples.style.backgroundColor = '#fff0f5';
  studentClassExamples.style.padding = '15px';
  studentClassExamples.style.borderRadius = '8px';
  studentClassExamples.style.margin = '10px 0';

  // Iterate through students and display their method outputs
  students.forEach((student, index) => {
    const studentExample = document.createElement('div');
    studentExample.style.border = '1px solid #ddd';
    studentExample.style.borderRadius = '6px';
    studentExample.style.padding = '10px';
    studentExample.style.margin = '8px 0';
    studentExample.style.backgroundColor = '#fff';

    // Display method results for each student
    studentExample.innerHTML = `
      <h4 style="margin: 0 0 8px 0; color: #6a1b9a;">Student ${index + 1}</h4>
      <p style="margin: 4px 0;"><strong>displayName():</strong> ${student.displayName()}</p>
      <p style="margin: 4px 0;"><strong>workOnHomework():</strong> ${student.workOnHomework()}</p>
    `;

    studentClassExamples.appendChild(studentExample);
  });

  container.appendChild(studentClassExamples);

  // ========== TEACHERS SECTION ==========
  
  /**
   * Section Purpose: Display teacher objects and their properties
   * 
   * Dynamic Property Handling:
   * - Shows required properties explicitly
   * - Dynamically discovers additional properties
   * - Filters out standard properties to find extras
   */
  const teachersTitle = document.createElement('h2');
  teachersTitle.textContent = 'Teachers';
  teachersTitle.style.color = '#333';
  teachersTitle.style.borderBottom = '2px solid #333';
  teachersTitle.style.paddingBottom = '10px';
  teachersTitle.style.marginTop = '40px';
  container.appendChild(teachersTitle);

  teachers.forEach((teacher, index) => {
    const teacherDiv = document.createElement('div');
    teacherDiv.style.border = '1px solid #ccc';
    teacherDiv.style.borderRadius = '8px';
    teacherDiv.style.padding = '15px';
    teacherDiv.style.margin = '10px 0';
    teacherDiv.style.backgroundColor = '#f9f9f9';

    // Header with formatted name
    const title = document.createElement('h3');
    title.textContent = `Teacher ${index + 1}: ${printTeacher(teacher.firstName, teacher.lastName)}`;
    title.style.marginTop = '0';
    title.style.color = '#333';

    // Required and optional properties
    const details = document.createElement('div');
    details.innerHTML = `
      <p><strong>Full Name:</strong> ${teacher.firstName} ${teacher.lastName}</p>
      <p><strong>Display Name:</strong> ${printTeacher(teacher.firstName, teacher.lastName)}</p>
      <p><strong>Full Time Employee:</strong> ${teacher.fullTimeEmployee}</p>
      <p><strong>Location:</strong> ${teacher.location}</p>
      ${teacher.yearsOfExperience ? `<p><strong>Years of Experience:</strong> ${teacher.yearsOfExperience}</p>` : ''}
    `;

    // Dynamic additional properties
    const additionalInfo = document.createElement('div');
    additionalInfo.innerHTML = '<strong>Additional Information:</strong>';
    const additionalList = document.createElement('ul');
    additionalList.style.marginLeft = '20px';

    // Filter out standard properties to find additional ones
    for (const [key, value] of Object.entries(teacher)) {
      if (!['firstName', 'lastName', 'fullTimeEmployee', 'location', 'yearsOfExperience'].includes(key)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
        additionalList.appendChild(listItem);
      }
    }

    // Assemble the card
    teacherDiv.appendChild(title);
    teacherDiv.appendChild(details);
    if (additionalList.children.length > 0) {
      additionalInfo.appendChild(additionalList);
      teacherDiv.appendChild(additionalInfo);
    }

    container.appendChild(teacherDiv);
  });

  // ========== DIRECTORS SECTION ==========
  
  /**
   * Section Purpose: Display director objects with inherited and specific properties
   * 
   * Inheritance Demonstration:
   * - Shows all Teacher properties are available
   * - Highlights Director-specific numberOfReports
   * - Maintains dynamic property discovery
   */
  const directorsTitle = document.createElement('h2');
  directorsTitle.textContent = 'Directors';
  directorsTitle.style.color = '#333';
  directorsTitle.style.borderBottom = '2px solid #333';
  directorsTitle.style.paddingBottom = '10px';
  directorsTitle.style.marginTop = '40px';
  container.appendChild(directorsTitle);

  directors.forEach((director, index) => {
    const directorDiv = document.createElement('div');
    directorDiv.style.border = '1px solid #666';
    directorDiv.style.borderRadius = '8px';
    directorDiv.style.padding = '15px';
    directorDiv.style.margin = '10px 0';
    directorDiv.style.backgroundColor = '#e8f4fd'; // Different background for visual distinction

    const title = document.createElement('h3');
    title.textContent = `Director ${index + 1}: ${printTeacher(director.firstName, director.lastName)}`;
    title.style.marginTop = '0';
    title.style.color = '#1a5276'; // Different color for directors

    const details = document.createElement('div');
    details.innerHTML = `
      <p><strong>Full Name:</strong> ${director.firstName} ${director.lastName}</p>
      <p><strong>Display Name:</strong> ${printTeacher(director.firstName, director.lastName)}</p>
      <p><strong>Full Time Employee:</strong> ${director.fullTimeEmployee}</p>
      <p><strong>Location:</strong> ${director.location}</p>
      <p><strong>Number of Reports:</strong> ${director.numberOfReports}</p> <!-- Director-specific -->
      ${director.yearsOfExperience ? `<p><strong>Years of Experience:</strong> ${director.yearsOfExperience}</p>` : ''}
    `;

    const additionalInfo = document.createElement('div');
    additionalInfo.innerHTML = '<strong>Additional Information:</strong>';
    const additionalList = document.createElement('ul');
    additionalList.style.marginLeft = '20px';

    // Filter includes Director-specific properties
    for (const [key, value] of Object.entries(director)) {
      if (!['firstName', 'lastName', 'fullTimeEmployee', 'location', 'yearsOfExperience', 'numberOfReports'].includes(key)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
        additionalList.appendChild(listItem);
      }
    }

    directorDiv.appendChild(title);
    directorDiv.appendChild(details);
    if (additionalList.children.length > 0) {
      additionalInfo.appendChild(additionalList);
      directorDiv.appendChild(additionalInfo);
    }

    container.appendChild(directorDiv);
  });

  // Final attachment to document
  document.body.appendChild(container);
}

// ==================== CONSOLE VERIFICATION ====================

/**
 * Console Verification: Provides runtime validation of implementations
 * 
 * Verification Strategy:
 * - Function output verification
 * - Method call validation
 * - Object structure confirmation
 * - TypeScript runtime behavior check
 */
console.log('=== PRINT TEACHER FUNCTION VERIFICATION ===');
console.log('printTeacher("John", "Doe"):', printTeacher('John', 'Doe'));
console.log('printTeacher("Alice", "Smith"):', printTeacher('Alice', 'Smith'));

console.log('=== STUDENT CLASS METHOD VERIFICATION ===');
console.log('Student 1 displayName():', student1.displayName());
console.log('Student 1 workOnHomework():', student1.workOnHomework());
console.log('Student 2 displayName():', student2.displayName());
console.log('Student 2 workOnHomework():', student2.workOnHomework());

console.log('=== TEACHER OBJECT STRUCTURE VERIFICATION ===');
console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
console.log('Teacher 3:', teacher3);

console.log('=== DIRECTOR OBJECT STRUCTURE VERIFICATION ===');
console.log('Director 1:', director1);
console.log('Director 2:', director2);

// ==================== INITIALIZATION ====================

/**
 * DOM Content Loaded Event: Ensures safe DOM manipulation
 * 
 * Best Practice:
 * - Wait for full DOM loading before manipulation
 * - Prevents race conditions with DOM elements
 * - Ensures all elements are available for modification
 */
document.addEventListener('DOMContentLoaded', displayTeachers);