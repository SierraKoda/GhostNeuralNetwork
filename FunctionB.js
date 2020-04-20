function ParamTypes(...types) {
  return (target, propertyKey) => {
    const symParamTypes = Symbol.for("id:execToken");
    if (propertyKey === undefined) {
      target[symParamTypes] = types;
    }
    else {
      const symProperties = Symbol.for("id:properties");
      let properties, property;
      if (Object.prototype.hasOwnProperty.call(target, symProperties)) {
        properties = target[symProperties];
      }
      else {
        properties = target[symProperties] = {};
      }
      if (Object.prototype.hasOwnProperty.call(properties, propertyKey)) {
        property = properties[propertyKey];
      }
      else {
        property = properties[propertyKey] = {};
      }
      property[symParamTypes] = types;
    }
  };
}