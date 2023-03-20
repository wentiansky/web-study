// 类型别名常用于联合类型
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

function getName(name: NameOrResolver): Name {
  if (typeof name === 'string') {
    return name
  }
  return name()
}

// 声明setTimeout
type TimeoutHandle = ReturnType<typeof setTimeout>