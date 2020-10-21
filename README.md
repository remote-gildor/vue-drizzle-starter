# Vue Drizzle Project Starter Kit

This starter kit includes:

- Vue
- Drizzle (with Vue Plugin)
- Vuex
- Vue Router
- Vue Bootstrap
- Vue Toasted

## Install npm packages

Run `npm install` command in both root folder and the `vapp` folder.

## Bootstrap

See Vue Bootstrap docs here: https://bootstrap-vue.org/docs/components

## Check if Drizzle is initialized

First import `mapGetters` from Vuex:

```javascript
import { mapGetters } from "vuex";
```

Then add this line in the computed object:

```javascript
computed: {
  ...mapGetters('drizzle', ['isDrizzleInitialized'])
```

Then, you can use the if-else statement in a template:

```html
<div v-if="isDrizzleInitialized" id="app">
  ...
</div>

<div v-else>Loading...</div>
```

## Drizzle instance

```javascript
computed: {
    ...mapGetters("drizzle", ["drizzleInstance"])
```


