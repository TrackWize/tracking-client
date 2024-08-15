"use client";

import { Button, Form } from "@/components";
import { z } from "zod";

export default function Page() {
  return (
    <Form<"name" | "email" | "password" | "confirm-password">
      validator={z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
        "confirm-password": z.string(),
      })}
      additionalRules={{ equals: [["password", "confirm-password"]] }}
      onSuccess={(data, ref) => {
        console.log(data);
      }}
      onFailed={(_, ref) => {
        ref?.current?.querySelectorAll("input")?.forEach((item) => {
          console.log(item);
          if (!(item as any).isWrong) {
            item.placeholder = `${item.placeholder} - O valor antigo está inválido`;
          }
          (item as any).isWrong = "true";
        });
      }}
      className="flex flex-col gap-4"
    >
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input
        type="password"
        name="confirm-password"
        placeholder="Confirm Password"
      />
      <Button>Submit</Button>
    </Form>
  );
}
