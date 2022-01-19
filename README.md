# package-name
This is a typescript project template that you can use to quickly bootstrap a typescript project with the inversion of control framework Inversify and testing framework Jest.

## Module aliasing
Instead of litering your code with import statements that couple you to your filesystem structure you can use "module aliases" instead. To import things within your source files using module aliases you would write something like: `import Foo from '@package-name/foo'`. You will want to perform a "find and replace" on this project to update project-name to that of your project so that the imports make sense for your project.

### Update module alias under Linux (and Mac?)
```.bash
# Find and replace using grep and sed commands from bash
for f in $(grep -lrn . -ie 'package-name' --exclude-dir=node_modules); do 
  # Change name-of-your-package to the name of your package
  sed -i 's/package-name/name-of-your-package/g' "$f";
done
```

```.bash
# Same as above but as a "one-liner"
for f in $(grep -lrn . -ie 'package-name' --exclude-dir=node_modules); do sed -i 's package-name/name-of-your-package/g' "$f"; done
```

### Update module alias under Windows
It seems likely the easiest way to go about this is to use an IDE or "editor" such as VS Code. Performing "find and replace" from PowerShell for source code that may be editted on Linux or Unix based environments, in most examples I have found, results in file encoding changes in those files which have had strings replaced.

## Pre-commit hooks (pre-flight checks)
There are pre-commit hooks to ensure that style, linting, and tests are all in "good states" prior to a commit happening. This should however only apply to staged files meaning that if it was someone else who left a mess, you are only asked to cleanup your own. You can disable these entirely by removing the related configuration within .lintstagedrc.js.

## Building package-name
To build package-name you can use either `yarn` or `npm` as follows:

* `yarn build`
* `npm run build`

You can clean up (delete) anything that's been built with either `yarn` or `npm` as follows:

* `yarn clean`
* `npm run clean`

## Running package-name
To run package-name you can use either `yarn` or `npm` as follows:

* `yarn start`
* `npm run start`

Be sure to have built the project prior to running (see building project-name section above)

## Debugging package-name
To debug package-name you can use either `yarn` or `npm` as follows:

* `yarn debug`
* `npm run debug`

If you need to test something which executes very early in the application you may need to tell node to wait to execute until the debugger has attached. You can do this with `yarn` or `npm` as follows:

* `yarn debug:wait-for-attach`
* `npm run debug:wait-for-attach`

## Formatting
To format all js and ts files you can use either `yarn` or `npm` as follows:

* `yarn format`
* `npm run format`

This will run `eslint` with `--fix` option as well as `prettier` with the `-w` (write) option.

## Running tests
To run the included tests for package-name you can use either `yarn` or `npm` as follows:

* `yarn test`
* `npm run test`
