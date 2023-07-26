# TypeScript - visibilityChange

The function `visibilityChange` is implemented as follows:

- It returns a Promise.
- This promise resolves when the user switches tabs (leaves or returns).
- The promise resolves false if the user leaves the tab; true if the user returns to the tab.

Two additional functions are also implemented:

1. `visible`: This promise resolves if the tab is already active or if the user returns to the tab.
2. `hidden`: This promise resolves if the tab is already inactive or if the user leaves the tab.

## Usage

---

```js
(async function () {
  const isVisible = await visibilityChange(); // returns true/false when the user changes the tab's activity
  const returned = await visible(); // returns true when the user returns (or already here)
  const gone = await hidden(); // returns true when the user leaves (or already left)
})();
```
