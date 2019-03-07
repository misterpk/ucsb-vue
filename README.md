# UCSB Vue

## Project setup

Type the following command in terminal to get dependencies

```
yarn
```

### Run the project

You can stop the terminal by using the "Control + C" shortcut 

```
yarn start
```

### Build the project for release

Will be created inside of dist folder

```
yarn build
```

### Release website easily with surge

If you install surge with command (only once needed for all projects) 

```bash
npm i -g surge
```

Then you can type

```
surge ./dist <ENTER_SUBDOMAIN>.surge.sh

# as an example
surge ./dist angeluscb2.surge.sh
```
