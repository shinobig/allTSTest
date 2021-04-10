  
import { Project, ProjectStatus } from '../models/project';

  type Listener<T> = (items: T[]) => void;
  
  class State<T>{
    protected listeners: Listener<T>[] = [];
    addListener(listenerFc: Listener<T>) {
      this.listeners.push(listenerFc);
    }
  }

  export class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
      super();
    }

    static getInstance() {
      if (this.instance) {
        return this.instance;
      } else {
        this.instance = new ProjectState();
        return this.instance;
      }
    }


    addProject(title: string, description: string, numOfPeople: number) {
      const newProject = new Project(
        Math.random.toString(),
        title,
        description,
        numOfPeople,
        ProjectStatus.Active
      );

      this.projects.push(newProject);

      this.updateListener();
    }

    moveProject(projectId: string, newStatus: ProjectStatus) {

      const project = this.projects.find(prj => projectId === prj.id);

      if (project) {
        project.status = newStatus;
      }
      this.updateListener();
    }

    private updateListener() {
      for (const listenerFc of this.listeners) {
        listenerFc(this.projects.slice());
      }
    }


  }

  export const projectState = ProjectState.getInstance();

