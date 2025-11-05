// Interface for Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // This allows any additional attributes
}

// Interface for Directors that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// STEP 1: Create teacher objects using the Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  specialization: 'Science' // Additional information
};

const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,
  specialization: 'Mathematics', // Additional information
  contract: true // Additional information
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'Paris',
  specialization: 'Mathematics', // Additional information
  contract: true // Additional information
};

// STEP 2: Create director objects using the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  yearsOfExperience: 15, // Optional attribute from Teacher
  department: 'Administration', // Additional information
  officeNumber: 'A-101' // Additional information
};

const director2: Directors = {
  firstName: 'Sarah',
  lastName: 'Wilson',
  location: 'Berlin',
  fullTimeEmployee: true,
  numberOfReports: 8,
  yearsOfExperience: 10, // Optional attribute from Teacher
  department: 'Engineering' // Additional information
};

// STEP 3: Function to display all information on the webpage
function displayTeachers(): void {
  // Create arrays of teachers and directors
  const teachers: Teacher[] = [teacher1, teacher2, teacher3];
  const directors: Directors[] = [director1, director2];
  
  // Create main container for all content
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.fontFamily = 'Arial, sans-serif';

  // STEP 4: Display Teachers section
  const teachersTitle = document.createElement('h2');
  teachersTitle.textContent = 'Teachers';
  teachersTitle.style.color = '#333';
  teachersTitle.style.borderBottom = '2px solid #333';
  teachersTitle.style.paddingBottom = '10px';
  container.appendChild(teachersTitle);

  // STEP 5: Loop through each teacher and create their display card
  teachers.forEach((teacher, index) => {
    // Create a card for each teacher
    const teacherDiv = document.createElement('div');
    teacherDiv.style.border = '1px solid #ccc';
    teacherDiv.style.borderRadius = '8px';
    teacherDiv.style.padding = '15px';
    teacherDiv.style.margin = '10px 0';
    teacherDiv.style.backgroundColor = '#f9f9f9';

    // Create teacher title
    const title = document.createElement('h3');
    title.textContent = `Teacher ${index + 1}: ${teacher.firstName} ${teacher.lastName}`;
    title.style.marginTop = '0';
    title.style.color = '#333';

    // STEP 6: Display basic teacher information
    const details = document.createElement('div');
    details.innerHTML = `
      <p><strong>Full Time Employee:</strong> ${teacher.fullTimeEmployee}</p>
      <p><strong>Location:</strong> ${teacher.location}</p>
      ${teacher.yearsOfExperience ? `<p><strong>Years of Experience:</strong> ${teacher.yearsOfExperience}</p>` : ''}
    `;

    // STEP 7: Display additional information (previously called additional attributes)
    const additionalInfo = document.createElement('div');
    additionalInfo.innerHTML = '<strong>Additional Information:</strong>';
    const additionalList = document.createElement('ul');
    additionalList.style.marginLeft = '20px';

    // Loop through all properties and find additional ones
    for (const [key, value] of Object.entries(teacher)) {
      // Filter out standard properties to find additional information
      if (!['firstName', 'lastName', 'fullTimeEmployee', 'location', 'yearsOfExperience'].includes(key)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
        additionalList.appendChild(listItem);
      }
    }

    // STEP 8: Assemble the teacher card
    teacherDiv.appendChild(title);
    teacherDiv.appendChild(details);
    if (additionalList.children.length > 0) {
      additionalInfo.appendChild(additionalList);
      teacherDiv.appendChild(additionalInfo);
    }

    container.appendChild(teacherDiv);
  });

  // STEP 9: Display Directors section
  const directorsTitle = document.createElement('h2');
  directorsTitle.textContent = 'Directors';
  directorsTitle.style.color = '#333';
  directorsTitle.style.borderBottom = '2px solid #333';
  directorsTitle.style.paddingBottom = '10px';
  directorsTitle.style.marginTop = '40px';
  container.appendChild(directorsTitle);

  // STEP 10: Loop through each director and create their display card
  directors.forEach((director, index) => {
    // Create a card for each director (with different styling)
    const directorDiv = document.createElement('div');
    directorDiv.style.border = '1px solid #666';
    directorDiv.style.borderRadius = '8px';
    directorDiv.style.padding = '15px';
    directorDiv.style.margin = '10px 0';
    directorDiv.style.backgroundColor = '#e8f4fd';

    // Create director title
    const title = document.createElement('h3');
    title.textContent = `Director ${index + 1}: ${director.firstName} ${director.lastName}`;
    title.style.marginTop = '0';
    title.style.color = '#1a5276';

    // STEP 11: Display basic director information
    const details = document.createElement('div');
    details.innerHTML = `
      <p><strong>Full Time Employee:</strong> ${director.fullTimeEmployee}</p>
      <p><strong>Location:</strong> ${director.location}</p>
      <p><strong>Number of Reports:</strong> ${director.numberOfReports}</p>
      ${director.yearsOfExperience ? `<p><strong>Years of Experience:</strong> ${director.yearsOfExperience}</p>` : ''}
    `;

    // STEP 12: Display additional information for directors
    const additionalInfo = document.createElement('div');
    additionalInfo.innerHTML = '<strong>Additional Information:</strong>';
    const additionalList = document.createElement('ul');
    additionalList.style.marginLeft = '20px';

    // Loop through all properties and find additional ones
    for (const [key, value] of Object.entries(director)) {
      // Filter out standard properties to find additional information
      if (!['firstName', 'lastName', 'fullTimeEmployee', 'location', 'yearsOfExperience', 'numberOfReports'].includes(key)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
        additionalList.appendChild(listItem);
      }
    }

    // STEP 13: Assemble the director card
    directorDiv.appendChild(title);
    directorDiv.appendChild(details);
    if (additionalList.children.length > 0) {
      additionalInfo.appendChild(additionalList);
      directorDiv.appendChild(additionalInfo);
    }

    container.appendChild(directorDiv);
  });

  // STEP 14: Add everything to the webpage
  document.body.appendChild(container);
}

// STEP 15: Log all objects to console for verification
console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
console.log('Teacher 3:', teacher3);
console.log('Director 1:', director1);
console.log('Director 2:', director2);

// STEP 16: Wait for page to load, then display everything
document.addEventListener('DOMContentLoaded', displayTeachers);