"use client";

import {
  FormEvent,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  RefObject,
  useRef,
} from "react";
import { ZodSchema } from "zod";

type Field = {
  type: HTMLInputTypeAttribute;
  value: FormDataEntryValue;
};

type FormItems<T extends string> = { [value in T]: Field };

type Props<T extends string> = Omit<
  HTMLAttributes<HTMLFormElement>,
  "onSubmit"
> & {
  validator: ZodSchema<Record<T, any>>;
  additionalRules?: {
    equals?: Array<[T, T]>;
  };
  onSuccess(data: FormItems<T>, formRef?: RefObject<HTMLFormElement>): void;
  onFailed(data: FormItems<T>, formRef?: RefObject<HTMLFormElement>): void;
};

export function Form<T extends string>({
  children,
  validator,
  additionalRules,
  onSuccess,
  onFailed,
  ...props
}: Props<T>) {
  if (Object.hasOwn(props, "onSubmit"))
    throw new Error(`Do not use "onSubmit" method.`);

  const formRef = useRef<HTMLFormElement>(null);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(formRef.current!);

    const formData: FormItems<T> = {} as FormItems<T>;
    const formToValidate: { [value in T]: string } = {} as any;

    Array.from(form.entries()).forEach((items) => {
      (formData as any)[items[0]] = {
        type: (
          formRef.current?.querySelector(
            `[name="${items[0]}"]`
          ) as HTMLInputElement
        )?.type,
        value: items[1],
      };
      (formToValidate as any)[items[0]] = items[1];
    });

    if (validator.safeParse(formToValidate).success) {
      let valid = true;

      if (additionalRules) {
        if (additionalRules.equals && valid) {
          additionalRules.equals.forEach((item) => {
            if (formData[item[0]].value !== formData[item[1]].value) {
              valid = false;
            }
          });
        }

        if (!valid) {
          onFailed(formData);
          return;
        }
      }

      onSuccess(formData);
      formRef.current?.reset();
      return;
    }

    onFailed(formData);
  };

  return (
    <form onSubmit={submit} ref={formRef} {...props}>
      {children}
    </form>
  );
}
