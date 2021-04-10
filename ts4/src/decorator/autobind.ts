
export function Autobind(_: any, _2: any, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: true,
      get() {
        const boundFunction = originalMethod.bind(this);
        return boundFunction;
      }
    };

    return adjDescriptor;
  };

