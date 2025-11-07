/// <reference path="./Teacher.ts" />

/**
 * Subject base class in Subjects namespace
 * Contains common functionality for all subjects
 */
namespace Subjects {
  export class Subject {
    private _teacher: Teacher;

    /**
     * Setter method for teacher
     * @param teacher - Teacher instance to set
     */
    setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }

    /**
     * Getter method for teacher (for internal use)
     */
    get teacher(): Teacher {
      return this._teacher;
    }
  }
}