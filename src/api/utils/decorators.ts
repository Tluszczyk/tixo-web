import { AppwriteException } from 'appwrite';

export function HandleAppwriteErrors<T>(
  errorMap: Record<string, T>,
  defaultErrorValue: T
) {
  // The new TS 5.0 signature expects 2 arguments: the original method and the context
  return function <This, Args extends unknown[], Return>(
    target: (this: This, ...args: Args) => Promise<Return>,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Promise<Return>>
  ) {

    // We return the replacement function directly
    return async function (this: This, ...args: Args) {
      try {
        return await target.apply(this, args);
      } catch (exception) {
        if (exception instanceof AppwriteException) {
          // Return the mapped error state, or the default
          return errorMap[exception.type] ?? defaultErrorValue;
        } else {
          // Fallback for non-Appwrite errors
          console.error(`Error in method ${String(context.name)}:`, exception);
          return defaultErrorValue;
        }
      }
    };
  };
}
