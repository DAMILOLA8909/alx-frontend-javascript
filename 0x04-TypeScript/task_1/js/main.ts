/**
 * TASK 1: Teacher and Director Interfaces Implementation
 * 
 * This file demonstrates TypeScript interfaces with:
 * - Teacher interface with required, optional, and flexible properties
 * - Director interface that extends Teacher with additional required property
 * - Implementation examples showing interface usage
 * - Dynamic display of objects in the browser
 */

// Interface for Teacher with specific requirements:
// - firstName and lastName are readonly (can only be set during initialization)
// - fullTimeEmployee and location are always required
// - yearsOfExperience is optional
// - Index signature allows any additional properties
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Index signature: allows any additional attributes
}

// Interface for Director that extends Teacher:
// - Inherits all properties from Teacher interface
// - Adds required numberOfReports property
// - Maintains the flexibility of additional properties
interface Director extends Teacher {
  numberOfReports: number;
}

// TEACHER OBJECT EXAMPLES:
// Demonstrating different combinations of required, optional, and additional properties

// Teacher 1: Has all required properties plus optional yearsOfExperience and additional properties
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,           // Optional property
  specialization: 'Mathematics',  // Additional property
  contract: true                  // Additional property
};

// Teacher 2: Full-time teacher with additional properties
const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'Paris',
  specialization: 'Mathematics',  // Additional property
  contract: true                  // Additional property
};

// Teacher 3: Part-time teacher (fullTimeEmployee: false) with additional properties
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,                // Additional property
  specialization: 'Science'       // Additional property
};

// DIRECTOR OBJECT EXAMPLES:
// Demonstrating interface inheritance and additional required property

// Director 1: Full director example with all types of properties
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,            // Required by Director interface
  yearsOfExperience: 15,          // Optional from Teacher interface
  department: 'Administration',   // Additional property
  officeNumber: 'A-101'           // Additional property
};

// Director 2: Another director example showing interface flexibility
const director2: Director = {
  firstName: 'Sarah',
  lastName: 'Wilson',
  location: 'Berlin',
  fullTimeEmployee: true,
  numberOfReports: 8,             // Required by Director interface
  yearsOfExperience: 10,          // Optional from Teacher interface
  department: 'Engineering'       // Additional property
};

/**
 * DISPLAY FUNCTION: Renders all teachers and directors in the browser
 * 
 * This function:
 * - Creates a structured HTML layout
 * - Displays teachers and directors in separate sections
 * - Dynamically shows all properties including additional ones
 * - Uses different styling to distinguish between roles
 */
function displayTeachers(): void {
  // Create arrays for organized display
  const teachers: Teacher[] = [teacher1, teacher2, teacher3];
  const directors: Director[] = [director1, director2];
  
  // Create main container with basic styling
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.fontFamily = 'Arial, sans-serif';

  // ==================== TEACHERS SECTION ====================
  const teachersTitle = document.createElement('h2');
  teachersTitle.textContent = 'Teachers';
  teachersTitle.style.color = '#333';
  teachersTitle.style.borderBottom = '2px solid #333';
  teachersTitle.style.paddingBottom = '10px';
  container.appendChild(teachersTitle);

  // Process each teacher and create their display card
  teachers.forEach((teacher, index) => {
    // Create card container for individual teacher
    const teacherDiv = document.createElement('div');
    teacherDiv.style.border = '1px solid #ccc';
    teacherDiv.style.borderRadius = '8px';
    teacherDiv.style.padding = '15px';
    teacherDiv.style.margin = '10px 0';
    teacherDiv.style.backgroundColor = '#f9f9f9';

    // Teacher name and title
    const title = document.createElement('h3');
    title.textContent = `Teacher ${index + 1}: ${teacher.firstName} ${teacher.lastName}`;
    title.style.marginTop = '0';
    title.style.color = '#333';

    // Display required and optional properties
    const details = document.createElement('div');
    details.innerHTML = `
      <p><strong>Full Time Employee:</strong> ${teacher.fullTimeEmployee}</p>
      <p><strong>Location:</strong> ${teacher.location}</p>
      ${teacher.yearsOfExperience ? `<p><strong>Years of Experience:</strong> ${teacher.yearsOfExperience}</p>` : ''}
    `;

    // Dynamic display of additional properties
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

    // Assemble the teacher card
    teacherDiv.appendChild(title);
    teacherDiv.appendChild(details);
    if (additionalList.children.length > 0) {
      additionalInfo.appendChild(additionalList);
      teacherDiv.appendChild(additionalInfo);
    }

    container.appendChild(teacherDiv);
  });

  // ==================== DIRECTORS SECTION ====================
  const directorsTitle = document.createElement('h2');
  directorsTitle.textContent = 'Directors';
  directorsTitle.style.color = '#333';
  directorsTitle.style.borderBottom = '2px solid #333';
  directorsTitle.style.paddingBottom = '10px';
  directorsTitle.style.marginTop = '40px';
  container.appendChild(directorsTitle);

  // Process each director and create their display card
  directors.forEach((director, index) => {
    // Create card container for individual director (different styling)
    const directorDiv = document.createElement('div');
    directorDiv.style.border = '1px solid #666';
    directorDiv.style.borderRadius = '8px';
    directorDiv.style.padding = '15px';
    directorDiv.style.margin = '10px 0';
    directorDiv.style.backgroundColor = '#e8f4fd'; // Light blue background

    // Director name and title
    const title = document.createElement('h3');
    title.textContent = `Director ${index + 1}: ${director.firstName} ${director.lastName}`;
    title.style.marginTop = '0';
    title.style.color = '#1a5276'; // Dark blue color

    // Display required, optional, and director-specific properties
    const details = document.createElement('div');
    details.innerHTML = `
      <p><strong>Full Time Employee:</strong> ${director.fullTimeEmployee}</p>
      <p><strong>Location:</strong> ${director.location}</p>
      <p><strong>Number of Reports:</strong> ${director.numberOfReports}</p>
      ${director.yearsOfExperience ? `<p><strong>Years of Experience:</strong> ${director.yearsOfExperience}</p>` : ''}
    `;

    // Dynamic display of additional properties for directors
    const additionalInfo = document.createElement('div');
    additionalInfo.innerHTML = '<strong>Additional Information:</strong>';
    const additionalList = document.createElement('ul');
    additionalList.style.marginLeft = '20px';

    // Filter out standard properties to find additional ones
    for (const [key, value] of Object.entries(director)) {
      if (!['firstName', 'lastName', 'fullTimeEmployee', 'location', 'yearsOfExperience', 'numberOfReports'].includes(key)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
        additionalList.appendChild(listItem);
      }
    }

    // Assemble the director card
    directorDiv.appendChild(title);
    directorDiv.appendChild(details);
    if (additionalList.children.length > 0) {
      additionalInfo.appendChild(additionalList);
      directorDiv.appendChild(additionalInfo);
    }

    container.appendChild(directorDiv);
  });

  // Add the complete display to the webpage
  document.body.appendChild(container);
}

/**
 * CONSOLE VERIFICATION: Log all objects to console for debugging
 * 
 * This helps verify that:
 * - All interfaces are properly implemented
 * - Objects have the correct structure
 * - TypeScript type checking is working
 */
console.log('=== TEACHER OBJECTS ===');
console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
console.log('Teacher 3:', teacher3);
console.log('=== DIRECTOR OBJECTS ===');
console.log('Director 1:', director1);
console.log('Director 2:', director2);

/**
 * INITIALIZATION: Wait for DOM to load before executing display function
 * 
 * This ensures all HTML elements are available before we try to modify them
 */
document.addEventListener('DOMContentLoaded', displayTeachers);