export function reduceHandlers([handler, ...rest]: Function[], arg?: any) {
  const next = (e) => rest.length !== 0 ? reduceHandlers(rest, e) : () => { };

  return (event = arg) => handler.bind(null, event, next(event))();
}