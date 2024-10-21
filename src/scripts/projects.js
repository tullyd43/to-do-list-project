export const TaskGroups = (function () {
    const projects = [];
	class TaskGroup {
		constructor(
			title,
			description,
			tasks = TaskGroups.TaskGroup.createTaskList()
		) {
			this.title = title;
			this.description = description;
			this.tasks = tasks;
		}
	}
	TaskGroup.createTaskList = function () {
		return [];
	};
	return {
		TaskGroup,
	};
})();

export const defaultGroup = (function () {
	const defaultTaskGroup = new TaskGroups.TaskGroup("test1", "test1");
    return defaultTaskGroup
    
})();