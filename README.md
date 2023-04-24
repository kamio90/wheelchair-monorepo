# Wheelchair BrainWaves Application - WIP

The Wheelchair BrainWaves application is designed to help people who use wheelchairs. It is currently under development, so changes may occur. The application is built using a modular architecture that includes several modules, such as:

- Drone Controller module for controlling drones that can assist people in wheelchairs
- APIs based on NestJS server
- UI client built using create-react-app with TypeScript
- Brainwaves module for reading brainwaves
- Engine module for controlling the electric engine that powers the wheelchair
- Smart House module for integrating with smart home systems
- Rock 4c+ microcomputer that serves all modules and controls the entire wheelchair

## Running the Application

To run the application, follow these steps:

1. In the root folder of the project, run the following command to install dependencies:

    ```bash
    pnpm i
    ```

2. Then, run the following command to start the application:

    ```bash
    docker compose up
    ```

3. To use the jobs defined in the NX vscode extension, install the extension and run the jobs from there.

## Technologies Used

The application is built using the following technologies:

- UI
  - [React](https://pl.react.dev)
  - [TypeScript](https://www.typescriptlang.org)
- APIs
  - [NestJS](https://nestjs.com)
  - [TypeScript](https://www.typescriptlang.org)
- Additional Technologies:
  - [PlopJS](https://plopjs.com)

## Global Code Conventions

### UI App

The UI client is based on the Atomic Design methodology, which organizes components in a scalable and maintainable way. The Atomic Design principles used in this project include atoms, molecules, organisms, templates, and pages.

### APIs

The APIs are built using the NestJS framework, which provides a modular architecture for organizing code in a structured and reusable way.

## Architecture

### Overview

The Wheelchair BrainWaves application uses a monorepo architecture with NX and PNPM as the package manager. The main UI is built using React and TypeScript, following the Atomic Design principles. The main backend is built using NestJS, with additional modules for the drone controller, brainwaves reader, electric engine, and Smart House integration. All modules are orchestrated by the Rock 4c+ microcomputer.

![Global Architecture](./architecture//general-overview.png)

For more detailed information about the architecture, please see the [Extended Architecture](./docs/ARCHITECTURE_MODULES_EXTENDED.md) document.

### Contributing Guidelines

Welcome to the Wheelchair BrainWaves project! We appreciate your interest in contributing and we are excited to have you on board. In order to make the process as smooth and efficient as possible, we have established the following guidelines for contributors.

#### Commit Conventions

We follow the conventional commits standard, which provides an easy-to-follow set of rules for writing commit messages. Each commit message should consist of a header, an optional body, and a footer. The header should include a brief summary of the changes, and the body should provide more detail on what was changed and why. The footer should include any relevant references or issue numbers.

#### Branching Strategy

We use the Gitflow branching model to manage our codebase. This model involves two main branches: `main` and `develop`. The `main` branch contains production-ready code, while the `develop` branch contains the latest code changes that are still being tested.

All feature branches should be created off of the `develop` branch and merged back into `develop` once the changes have been thoroughly tested. Release branches should be created off of `develop` and merged back into both `develop` and `main` once they are ready for production.

#### Pull Request Conventions

All changes to the codebase should be submitted via pull requests. Each pull request should have a descriptive title and a detailed description of the changes being made. The pull request should also reference any relevant issues or tickets.

All code changes should be reviewed by at least one other team member before being merged into the code
