type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

function getName(name: NameOrResolver): Name {
  if (typeof name === 'string') {
    return name
  }
  return name()
}