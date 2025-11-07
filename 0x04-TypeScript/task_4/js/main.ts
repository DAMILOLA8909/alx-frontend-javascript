/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

/**
 * Test file to verify all Subjects functionality
 */
namespace TestSubjects {
  // Create a teacher with different experiences
  const cTeacher: Subjects.Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10
  };

  // Test C++ class
  const cpp = new Subjects.Cpp();
  cpp.setTeacher(cTeacher);
  console.log('C++:');
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // Test Java class
  const java = new Subjects.Java();
  java.setTeacher(cTeacher);
  console.log('\nJava:');
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  // Test React class
  const react = new Subjects.React();
  react.setTeacher(cTeacher);
  console.log('\nReact:');
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}