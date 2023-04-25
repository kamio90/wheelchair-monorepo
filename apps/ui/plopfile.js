module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "list",
        name: "componentType",
        message: "What type of component do you want to create?",
        choices: ["pages", "templates", "organisms", "molecules", "atoms"],
      },
      {
        type: "confirm",
        name: "hasFolder",
        message: "Do you want to create a sub-folder?",
      },
      {
        type: "input",
        name: "folderName",
        message: "What is the sub-folder name?",
        when: (answers) => answers.hasFolder,
      },
    ],
    actions: (data) => {
      let actions = [];
      let path = "src/components/{{componentType}}/{{pascalCase name}}";

      if (data.hasFolder) {
        path = `${path}/${data.folderName}`;
      }

      actions.push({
        type: "add",
        path: `${path}/{{pascalCase name}}.{{componentType}}.tsx`,
        templateFile: "plop-templates/component.tsx.hbs",
      });

      return actions;
    },
  });
};
