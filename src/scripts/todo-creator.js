

export const toDo = function() {
	const toDoList = []
    class TaskGen {
		constructor(
			title,
			description,
			dueDate,
			priority,
			notes,
			checklist,
			ID = TaskGen.createID()
		) {
			this.title = title;
			this.description = description;
			this.dueDate = dueDate;
			this.priority = priority;
			this.notes = notes;
			this.checklist = checklist;
			this.ID = ID;
		}
	};
    TaskGen.createID = function() {
        // Code here
    }
    TaskGen.prototype.editTitle = function(title) {
        return (this.title = title)
    }
    TaskGen.prototype.editDescription = function (description) {
        return this.description = description
    }
    TaskGen.prototype.editDueDate = function (dueDate) {
        return this.dueDate = dueDate
    }
    TaskGen.prototype.editPriority = function (priority) {
        return this.priority = priority
    }
    TaskGen.prototype.editNotes = function (notes) {
        return this.notes = notes
    }
    TaskGen.prototype.editChecklist = function (checklist) {
        return this.checklist = checklist
    }
    return {
        TaskGen,
        toDoList
    }
}();
