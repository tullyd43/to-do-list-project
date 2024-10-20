

export const toDo = function() {
	const toDoList = []
    class TaskGen {
		constructor(title, description, dueDate, priority, notes, checklist) {
			this.title = title
			this.description = description
			this.dueDate = dueDate
			this.priority = priority
			this.notes = notes
			this.checklist = checklist
        }
    };
    TaskGen.prototype.editTitle = function(title) {
        return (this.title = title)
    }

    return {
        TaskGen,
        toDoList
    }
}();
