import { inject, type InjectionKey } from "vue";

export function defineInjectKey<T>(name: string): InjectionKey<T> {
  return Symbol(name);
}

export function validInject<T>(key: InjectionKey<T>): T {
  const api = inject(key);
  if (api == null) {
    const errorMessage = `You have to provide "${key.toString()}"`;
    throw new Error(errorMessage);
  }

  return api;
}
