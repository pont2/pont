[pont-spec](README.md) / Exports

# pont-spec

## Table of contents

### Classes

- [Interface](classes/Interface.md)
- [Mod](classes/Mod.md)
- [Parameter](classes/Parameter.md)
- [PontJsonSchema](classes/PontJsonSchema.md)
- [PontSpec](classes/PontSpec.md)

### Type Aliases

- [ObjectMap](modules.md#objectmap)

### Functions

- [mapifyGet](modules.md#mapifyget)
- [mapifyImmutableOperate](modules.md#mapifyimmutableoperate)
- [mapifyOperateList](modules.md#mapifyoperatelist)

## Type Aliases

### ObjectMap

Ƭ **ObjectMap**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Index signature

▪ [key: `string`]: `T`

#### Defined in

[src/utils.ts:4](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/utils.ts#L4)

## Functions

### mapifyGet

▸ **mapifyGet**(`result`, `pathes`): `any`

像 map 一样操作数组

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `any` | - |
| `pathes` | (`string` \| `number`)[] | ['mods', 'modA', 'name'] |

#### Returns

`any`

#### Defined in

[src/utils.ts:98](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/utils.ts#L98)

___

### mapifyImmutableOperate

▸ **mapifyImmutableOperate**(`result`, `operate`, `pathes`, `newValue?`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `any` | - |
| `operate` | ``"assign"`` \| ``"delete"`` | - |
| `pathes` | (`string` \| `number`)[] | ['mods', 'modA', 'name'] |
| `newValue?` | `any` | newModAName |

#### Returns

`any`

#### Defined in

[src/utils.ts:57](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/utils.ts#L57)

___

### mapifyOperateList

▸ **mapifyOperateList**<`T`\>(`operate`, `name`, `newValue`, `list`): `T`[]

像 map 一样操作数组

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `operate` | ``"assign"`` \| ``"delete"`` |
| `name` | `string` |
| `newValue` | `T` |
| `list` | `T`[] |

#### Returns

`T`[]

#### Defined in

[src/utils.ts:28](https://github.com/jamesdanner/pont/blob/b883bfc/packages/pont-spec/src/utils.ts#L28)
