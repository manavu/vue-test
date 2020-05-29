module.exports = async function(context, req) {
  context.log('JavaScript trigger function processed a request.')

  let data = [
    { name: 'test5', value: 'value5' },
    { name: 'test6', value: 'value6' },
    { name: 'test7', value: 'value7' },
    { name: 'test8', value: 'value8' },
    { name: 'test9', value: 'value9' },
    { name: 'test10', value: 'value10' },
  ]

  context.res = {
    body: JSON.parse(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }
}
