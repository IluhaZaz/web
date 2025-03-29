import { Component, OnInit } from '@angular/core';
import { Status, Task } from '../../core/models/task.models';
import { TaskService } from '../../core/services/task.service';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from '../task-form/task-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskFormComponent, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  showForm = false;
  statusFilter: Status | 'all' = 'all';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onTaskAdded(): void {
    this.loadTasks();
    this.showForm = false;
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }

  updateStatus(task: Task, newStatus: Status): void {
    this.taskService.updateTask(task.id, { status: newStatus });
    this.loadTasks();
  }

  get filteredTasks(): Task[] {
    if (this.statusFilter === 'all') {
      return this.tasks;
    }
    return this.tasks.filter(task => task.status === this.statusFilter);
  }

  getStatusClasses(status: Status): string {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'done': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return '';
    }
  }
}