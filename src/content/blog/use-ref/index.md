---
title: "UseRef Hook"
description: "Learn how to use useRef Hook"
date: "Nov 13, 2024"
---

useRef used to create a reference to hold a DOM element, the reference is a special object and current.value to access it’s value.

Calling <code>const reference = useRef(initialValue)</code> with the initial value returns a special object named reference. The reference object has a property current, you can use this property to read the reference value reference.current, or update 
<code> reference.current = newValue </code>

Between the component re-renderings, the value of the reference is persistent. but updating a reference, contrary to updating state, doesn't trigger component re-rendering.

Here is an example of how we use UseRef hook :

```ts
import * as React from "react";

const InputFocus = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
};
```
