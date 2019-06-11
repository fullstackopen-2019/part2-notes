const notes = [
  {
    id: '5a451df7571c224a31b5c8ce',
    content: 'HTML is easy',
    date: '2019-06-11T16:38:15.541Z',
    important: false,
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'mluukkai',
      name: 'Matti Luukkainen'
    }
  },
  {
    id: '5a451e21e0b8b04a45638211',
    content: 'Browser can execute only javascript',
    date: '2019-06-11T16:38:57.694Z',
    important: true,
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'mluukkai',
      name: 'Matti Luukkainen'
    }
  },
  {
    id: '5a451e30b5ffd44a58fa79ab',
    content: 'The most important methods of HTTP are GET and POST',
    date: '2019-06-11T16:39:12.713Z',
    important: true,
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'mluukkai',
      name: 'Matti Luukkainen'
    }
  }
]

const getAll = () => {
  return Promise.resolve(notes)
}

export default { getAll }