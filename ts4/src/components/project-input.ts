

import {Component} from './base-component';
import {Autobind} from '../decorator/autobind';
import { Validatable, validate } from '../util/validation';
import {projectState } from '../state/project-state';

  // Drawing firs form
 export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {

    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
      super('project-input', 'app', true, 'user-input')

      this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
      this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement
      this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement;

      this.configure();
    }

    configure() {
      this.element.addEventListener('submit', this.submitHandler)
    }

    renderContent() { }

    private gatherUserInput(): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredPeople = this.peopleInputElement.value;

      const titleValidatable: Validatable = {
        value: enteredTitle,
        required: true,
      }
      const descriptionValidatable: Validatable = {
        value: enteredDescription,
        required: true,
        minLenght: 5,
      }
      const peopleValidatable: Validatable = {
        value: +enteredPeople,
        required: true,
        min: 1,
      }

      if (

        /*
        enteredTitle.trim().length === 0 ||
        enteredDescription.trim().length === 0 ||
        enteredPeople.trim().length === 0
        */

        !validate(titleValidatable) ||
        !validate(descriptionValidatable) ||
        !validate(peopleValidatable)

      ) {
        alert('invalid values');
        return;
      } else {
        return [enteredTitle, enteredDescription, +enteredPeople];
      }
    }

    private clearInput() {
      this.titleInputElement.value = '';
      this.descriptionInputElement.value = '';
      this.peopleInputElement.value = '';
    }

    @Autobind
    private submitHandler(event: Event) {
      event.preventDefault();
      const userInput = this.gatherUserInput();

      if (Array.isArray(userInput)) {
        const [title, description, people] = userInput;
        projectState.addProject(title, description, people);
        this.clearInput();
      }
    }

  }
