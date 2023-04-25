module.exports = function (plop) {
  plop.setGenerator("React Atomic Design Component", {
    description: "Generate a new React Atomic Design component in TypeScript",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter the name of the component:",
      },
      {
        type: "list",
        name: "componentType",
        message: "Choose the component type:",
        choices: ["atoms", "molecules", "organisms", "pages", "templates"],
      },
    ],
    actions: function (data) {
      const actions = [
        {
          type: "add",
          path: `src/components/${data.componentType}/{{pascalCase name}}.{{componentType}}.tsx`,
          templateFile: "plop-templates/Component.tsx.hbs",
        },
      ];
      return actions;
    },
  });
};