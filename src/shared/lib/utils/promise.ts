// This util is very useful for mocks to emulate http delay
export async function delay(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
