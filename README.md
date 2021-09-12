## Micro Frontends Monorepo

This is a example repo that shows a simple structure for a monorepo using micro frontends with single-spa. This is using yarn workspaces to add basic tooling a separation of concerns, single-spa to connect the apps, and vercel for hosting and deployment.

### Packages

- root-config
- syleguide
- ui-navigation
- ui-people
- ui-places

## How to deploy this to vercel.

each app inside the packages folder is to be treated as it's own vercel project. Using the CLI you can simply run `vercel` from those folders and follow the instructions in order to deploy them on vercel.