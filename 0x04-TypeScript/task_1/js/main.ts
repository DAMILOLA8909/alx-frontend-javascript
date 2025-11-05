// Interface for Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // This allows any additional attributes
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Additional examples to demonstrate the interface
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'Paris',
  specialization: 'Mathematics', // Additional attribute
  contract: true // Additional attribute
};

// Function to display teacher information on the page
function displayTeachers(): void {
  const teachers: Teacher[] = [teacher1, teacher2, teacher3];
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.fontFamily = 'Arial, sans-serif';

  teachers.forEach((teacher, index) => {
    const teacherDiv = document.createElement('div');
    teacherDiv.style.border = '1px solid #ccc';
    teacherDiv.style.borderRadius = '8px';
    teacherDiv.style.padding = '15px';
    teacherDiv.style.margin = '10px 0';
    teacherDiv.style.backgroundColor = '#f9f9f9';

    const title = document.createElement('h3');
    title.textContent = `Teacher ${index + 1}: ${teacher.firstName} ${teacher.lastName}`;
    title.style.marginTop = '0';
    title.style.color = '#333';

    const details = document.createElement('div');
    details.innerHTML = `
      <p><strong>Full Time Employee:</strong> ${teacher.fullTimeEmployee}</p>
      <p><strong>Location:</strong> ${teacher.location}</p>
      ${teacher.yearsOfExperience ? `<p><strong>Years of Experience:</strong> ${teacher.yearsOfExperience}</p>` : ''}
    `;

    // Add any additional attributes
    const additionalAttributes = document.createElement('div');
    additionalAttributes.innerHTML = '<strong>Additional Attributes:</strong>';
    const additionalList = document.createElement('ul');
    additionalList.style.marginLeft = '20px';

    for (const [key, value] of Object.entries(teacher)) {
      if (!['firstName', 'lastName', 'fullTimeEmployee', 'location', 'yearsOfExperience'].includes(key)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
        additionalList.appendChild(listItem);
      }
    }

    teacherDiv.appendChild(title);
    teacherDiv.appendChild(details);
    if (additionalList.children.length > 0) {
      additionalAttributes.appendChild(additionalList);
      teacherDiv.appendChild(additionalAttributes);
    }

    container.appendChild(teacherDiv);
  });

  document.body.appendChild(container);
}

// Also log to console for verification
console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
console.log('Teacher 3:', teacher3);

// Display teachers when the page loads
document.addEventListener('DOMContentLoaded', displayTeachers);