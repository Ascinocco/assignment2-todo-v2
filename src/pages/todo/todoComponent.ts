import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'todo-component',
  templateUrl: 'todoComponent.html'
})
export class TodoComponent
{
  public todoList:        FirebaseListObservable<any[]>;
  public newTodoTitle:    string;

  constructor(public navCtrl: NavController, af: AngularFire)
  {
    this.todoList = af.database.list('/todos');
    this.newTodoTitle  = "";
  }

  /** ******************** Todo CRUD ******************** **/

  /**
   * Create todo and store it in firebase
   * @return {[type]} [description]
   */
  public createTodo()
  {
    if (this.newTodoTitle.length > 0) {
      let newTodo = {
        title: this.newTodoTitle,
        notes: "",
        complete: false,
        show: false
      }

      this.todoList.push(newTodo);
      this.newTodoTitle = "";
    } else {
      alert("Must fill in todo title before submitting");
    }
  }

  /**
   * Update firebase todo record
   * @param  {[type]} todo [description]
   * @return {[type]}      [description]
   */
  public updateTodo(todo)
  {
    this.todoList.update(todo.$key, {
      title: todo.title,
      notes: todo.notes,
      complete: todo.complete,
      show: false,
    });
  }

  /**
   * Delete from firebase and ui
   * @param  {[type]} todo [description]
   * @return {[type]}      [description]
   */
  public deleteTodo(todo)
  {
    this.todoList.remove(todo);
  }

  /** ******************** Todo Presentation ******************** **/

  public showTodoDetails(todo)
  {

  }
}
