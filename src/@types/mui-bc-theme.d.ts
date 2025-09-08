// Might be tempting to remove this import because it doesn't look like it's being used
// Resist the urge, app is non-deployable without this import
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme } from '@emotion/react';

// Allow MUI theme to have other KVPs appended to it
// Type needs to be flexible for this object
declare module '@emotion/react' {
  interface Theme {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }
}
