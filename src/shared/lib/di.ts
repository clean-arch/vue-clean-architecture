import { inject } from "vue";

export function validInject<T>(key: Symbol, interfaceName?: string): T {
  const api = inject<T>(key);
  if (api == null) {
    let errorMessage = `You have to provide "${key.toString()}"`;
    if (interfaceName) {
      errorMessage += `, that implement ${interfaceName} interface`;
    }
    throw new Error(errorMessage);
  }
  // TODO: it would be great if we could check the type for the injected object.

  return api;
}
