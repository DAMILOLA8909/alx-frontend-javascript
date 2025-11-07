/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

/**
 * React class extending Subject with React specific functionality
 * Uses declaration merging to add experienceTeachingReact to Teacher interface
 */
namespace Subjects {
  // Declaration merging - add experienceTeachingReact to Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    /**
     * Get requirements for React course
     * @returns string with React requirements
     */
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    /**
     * Get available teacher for React course
     * @returns string indicating teacher availability
     */
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}