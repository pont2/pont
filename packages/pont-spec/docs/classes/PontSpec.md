[pont-spec](../README.md) / [Exports](../modules.md) / PontSpec

# Class: PontSpec

## Table of contents

### Constructors

- [constructor](PontSpec.md#constructor)

### Properties

- [definitions](PontSpec.md#definitions)
- [ext](PontSpec.md#ext)
- [mods](PontSpec.md#mods)
- [name](PontSpec.md#name)

### Methods

- [constructorByName](PontSpec.md#constructorbyname)
- [findApi](PontSpec.md#findapi)
- [getClazzCnt](PontSpec.md#getclazzcnt)
- [isEmptySpec](PontSpec.md#isemptyspec)
- [reOrder](PontSpec.md#reorder)
- [serialize](PontSpec.md#serialize)
- [validateLock](PontSpec.md#validatelock)

## Constructors

### constructor

• **new PontSpec**(`ds?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ds?` | `Object` |
| `ds.definitions` | [`ObjectMap`](../modules.md#objectmap)<[`PontJsonSchema`](PontJsonSchema.md)\> |
| `ds.mods` | [`Mod`](Mod.md)[] |
| `ds.name` | `string` |

#### Defined in

[src/index.ts:78](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/index.ts#L78)

## Properties

### definitions

• **definitions**: [`ObjectMap`](../modules.md#objectmap)<[`PontJsonSchema`](PontJsonSchema.md)\>

#### Defined in

[src/index.ts:39](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/index.ts#L39)

___

### ext

• `Optional` **ext**: `any`

扩展字段

#### Defined in

[src/index.ts:42](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/index.ts#L42)

___

### mods

• **mods**: [`Mod`](Mod.md)[] = `[]`

#### Defined in

[src/index.ts:40](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/index.ts#L40)

___

### name

• **name**: `string`

#### Defined in

[src/index.ts:38](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/index.ts#L38)

## Methods

### constructorByName

▸ `Static` **constructorByName**(`name`): [`PontSpec`](PontSpec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`PontSpec`](PontSpec.md)

#### Defined in

[src/index.ts:84](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/index.ts#L84)

___

### findApi

▸ `Static` **findApi**(`spec`, `modName`, `apiName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | [`PontSpec`](PontSpec.md) |
| `modName` | `string` |
| `apiName` | `string` |

#### Returns

`any`

#### Defined in

[src/index.ts:100](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/index.ts#L100)

___

### getClazzCnt

▸ `Static` **getClazzCnt**(`spec`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | [`PontSpec`](PontSpec.md) |

#### Returns

`number`

#### Defined in

[src/index.ts:104](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/index.ts#L104)

___

### isEmptySpec

▸ `Static` **isEmptySpec**(`spec`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | [`PontSpec`](PontSpec.md) |

#### Returns

`boolean`

#### Defined in

[src/index.ts:92](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/index.ts#L92)

___

### reOrder

▸ `Static` **reOrder**(`ds`): [`PontSpec`](PontSpec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ds` | [`PontSpec`](PontSpec.md) |

#### Returns

[`PontSpec`](PontSpec.md)

#### Defined in

[src/index.ts:44](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/index.ts#L44)

___

### serialize

▸ `Static` **serialize**(`ds`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ds` | [`PontSpec`](PontSpec.md) |

#### Returns

`string`

#### Defined in

[src/index.ts:74](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/index.ts#L74)

___

### validateLock

▸ `Static` **validateLock**(`ds`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ds` | [`PontSpec`](PontSpec.md) |

#### Returns

`string`[]

#### Defined in

[src/index.ts:53](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/index.ts#L53)
