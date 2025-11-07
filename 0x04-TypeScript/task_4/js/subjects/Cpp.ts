/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

/**
 * Cpp class extending Subject with C++ specific functionality
 * Uses declaration merging to add experienceTeachingC to Teacher interface
 */
namespace Subjects {
  // Declaration merging - add experienceTeachingC to Teacher interface
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    /**
     * Get requirements for C++ course
     * @returns string with C++ requirements
     */
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    /**
     * Get available teacher for C++ course
     * @returns string indicating teacher availability
     */
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}