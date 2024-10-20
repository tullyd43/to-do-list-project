const projects = (function () {
	class Project {
		constructor(title, description, tasks) {
			this.title = title;
			this.descriptions = description;
			this.tasks = tasks;
		}
    }
    Project.defaultList = function () {
        return this.tasks = []
    }
	Project.prototype.createTaskList = function (tasks) {
		return (this.tasks = []);
	};
	const defaultProject = new Project(
		"General",
        "The 'General' project is a default space for tasks that don't fit into a specific project. Use it to quickly capture and manage your everyday to-dos.",
        tasks = Project.defaultList()
    );
    return {
        Project,
        defaultProject,
    }
})();

console.log(projects.defaultProject);