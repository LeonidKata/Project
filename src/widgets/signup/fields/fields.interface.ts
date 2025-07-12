export interface IFieldErrors {
  repeatPassword?: { message: string };
  password?: { message: string };
  email?: { message: string };
  isAgree?: { message: string };
  question?: { message: string };
  answer?: { message: string };
}

export interface IField {
  field?: object;
  errors?: IFieldErrors;
  required?: boolean;
  placeholder?: string;
  title?: string;
  validRepeatPassword?: boolean;
  validUsername?: boolean;
  validPassword?: boolean;
  validEmail?: boolean;
  validAnswer?: boolean;
  type?: string;
  defaultChecked?: boolean;
  defaultValue?: string;
  onChange?: (event: unknown) => void;
  value?: string;
  error?: boolean;
}
