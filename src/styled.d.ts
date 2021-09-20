import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    blueColor: string;
    // typing every variables that are in theme.ts
  }
}
