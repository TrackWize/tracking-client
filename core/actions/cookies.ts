"use server";

import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function setCookie(
  title: string,
  value: string,
  config?: Partial<ResponseCookie>
) {
  cookies().set(title, value, config);
}

export async function deleteCookies(title: string) {
  return cookies().delete(title);
}

export async function getAllCookies() {
  return cookies().getAll();
}

export async function getCookie(title: string) {
  return cookies().get(title);
}

export async function itemInCookies(title: string) {
  return cookies().has(title);
}

export async function getCookiesSize() {
  return cookies().size;
}
