import User from './../models/user'

export default {
  async all(req, res) {
    const result = await User.find(req.query)
    res.send(result)
  },
  async create(req, res) {
    const result = await User.create(req.body)
    res.send(result)
  },
  async update(req, res) {
    const result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(result)
  },
  async remove(req, res) {
    const result = await User.findByIdAndRemove(req.params.id)
    res.send(result)
  },
  async login(req, res) {
    const user = await User.findOne(req.body)
    res.send(user)
  },
}