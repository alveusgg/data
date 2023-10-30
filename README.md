# Alveus.gg Shared Data

Shared data repository for Alveus.gg projects, installed as a GitHub-based dependency in the
[website](https://github.com/alveusgg/alveusgg) and
[extension](https://github.com/alveusgg/extension) repositories.

## Releasing changes

To work with this repository locally, install the dependencies with `npm ci`.

To test changes locally, update the version in this repository using
`npm version --no-git-tag-version preminor` (use `premajor` instead if the change is breaking, or
`prerelease` for repeat testing), and install this repository as a file-based dependency:

- Website: `cd apps/website && pnpm remove @alveusgg/data && pnpm add file:../../../data`
- Extension: `npm install file:../data`

Alternatively, push the pre-release branch to GitHub and install it as a GitHub-based dependency:

- Website: `cd apps/website && pnpm remove @alveusgg/data && pnpm add github:alveusgg/data#<branch name>`
- Extension: `npm install github:alveusgg/data#<branch name>`

When the change is ready to release, update the version in this repository using
`npm version --no-git-tag-version minor` (use `major` instead if the change is breaking) and open a
pull request.

Once the pull request is merged, update the GitHub-based dependency in the website and extension:

- Website: `cd apps/website && pnpm remove @alveusgg/data && pnpm add github:alveusgg/data#<version>`
- Extension: `npm install github:alveusgg/data#<version>`
