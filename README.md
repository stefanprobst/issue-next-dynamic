# issue

## instructions

- run `yarn dev`
- see error: `__next_eval__ is not defined`

## notes

- works in 12.0.3, regression introduced in 12.0.4-canary.0
- works with `yarn build && yarn start`, error only occurs with `yarn dev`
