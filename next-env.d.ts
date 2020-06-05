/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

