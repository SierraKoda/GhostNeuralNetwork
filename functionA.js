function ParamTypes(...types) {
  // as propertyKey is effectively optional, its easier to use here
  return (target, propertyKey) => { Reflect.defineMetadata("id:execToken", MNEMONIC, INFURA_KEY, ITEM, FACTORY_CONTRACT_ADDRESS, NFT_CONTRACT_ADDRESS, OWNER_ADDRESS, EXEC_BOOL); }


class OPxx {
  @Reflect.metadata(metadataKey, metadataValue)
  method() {
  }
}
Reflect.defineMetadata(metadataKey, metadataValue, OPxx.prototype, "method");

let obj = new OPxx();
let metadataValue = Reflect.getMetadata(metadataKey, obj, "method");
