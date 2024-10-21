export const toDo = (function () {
	const toDoList = [];
	class ToDoGen {
		constructor(
			title,
			description,
			dueDate,
			priority,
			notes,
			checklist,
			subtasks,
			ID = toDo.ToDoGen.createID()
		) {
			this.title = title;
			this.description = description;
			this.dueDate = dueDate;
			this.priority = priority;
			this.notes = notes;
			this.checklist = checklist;
			this.subtasks = subtasks;
			this.ID = ID;
		}
	}
	ToDoGen.createID = function () {
		// Code here
	};
	ToDoGen.prototype.editTitle = function (title) {
		return (this.title = title);
	};
	ToDoGen.prototype.editDescription = function (description) {
		return (this.description = description);
	};
	ToDoGen.prototype.editDueDate = function (dueDate) {
		return (this.dueDate = dueDate);
	};
	ToDoGen.prototype.editPriority = function (priority) {
		return (this.priority = priority);
	};
	ToDoGen.prototype.editNotes = function (notes) {
		return (this.notes = notes);
	};
	ToDoGen.prototype.editChecklist = function (checklist) {
		return (this.checklist = checklist);
	};
	return {
		ToDoGen,
		toDoList,
	};
})();
