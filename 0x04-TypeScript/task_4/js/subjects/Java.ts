/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

/**
 * Java class extending Subject with Java specific functionality
 * Uses declaration merging to add experienceTeachingJava to Teacher interface
 */
namespace Subjects {
  // Declaration merging - add experienceTeachingJava to Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    /**
     * Get requirements for Java course
     * @returns string with Java requirements
     */
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    /**
     * Get available teacher for Java course
     * @returns string indicating teacher availability
     */
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}