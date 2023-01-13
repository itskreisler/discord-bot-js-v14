export const isEmptyObj = (_) =>
  Object.keys(_).length === 0 && _.constructor === Object
export const isEmptyArray = (_) => Array.isArray(_) && _.length === 0
export const binary2Text = (str, args = { zero: '😡', one: '🥺' }) => {
  const { zero, one } = args
  return str
    .replaceAll(zero, '0')
    .replaceAll(one, '1')
    .match(/.{1,8}/g)
    .map((i) => i)
    .map((i) => parseInt(i, 2))
    .map((i) => String.fromCharCode(i))
    .join('')
}
export const text2Binary = (str, args = { zero: '😡', one: '🥺' }) => {
  const { zero, one } = args
  return [...str]
    .map((i) => i.charCodeAt().toString(2).padStart(8, '0'))
    .join('')
    .replaceAll('0', zero)
    .replaceAll('1', one)
}
export const uniqueKey = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
