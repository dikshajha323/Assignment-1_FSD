# Assignment-1_FSD
# EventEmitter

## Question

What is the difference between emitter.on() and emitter.once()?
Create an example where once() is more appropriate than on().

## Difference between on() and once()

The `on()` method is used to add an event listener that executes every time the specified event is emitted.

The `once()` method is used to add an event listener that executes only one time. After the first execution, the listener is automatically removed.

## Example

In this program, the `login` event uses `on()`. Therefore, the callback runs every time the event is emitted.

The `firstLogin` event uses `once()`. Therefore, the callback runs only the first time the event is emitted.

## Output

Using on():
on(): User logged in
on(): User logged in
on(): User logged in

Using once():
once(): Welcome! This message will appear only once.

## Why is once() more appropriate?

`once()` is more appropriate for events that should happen only one time, such as showing a welcome message after a user's first login.

Using `once()` prevents the same action from happening repeatedly.