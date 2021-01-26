const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')

// req.query: quando passar uma ?id:1
// req.body: pega do corpo da requisiçao "post"
// req.params: /:id 

exports.index = function (req, res) {

  return res.render("instructors/index", { instructors: data.instructors })

}
exports.create = function (req, res) {
  return res.render('members/create')
}
exports.post = function (req, res) {
  // req.query
  // req.body

  // estrutura de validação

  const keys = Object.keys(req.body)

  for (key of keys) {
    // mesma coisa que req.body.avatar_url por exemplo
    if (req.body[key] == "") {
      return res.send('Please, fill all fields')
    }
  }

  let { avatar_url, birth, name, services, gender } = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.instructors.length + 1)



  // [vazio]
  data.instructors.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at
  })  //[{com objeto}]

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("write file error")

    return res.redirect("/instructors")
  })

  // return res.send(req.body)
}
exports.show = function (req, res) {
  const { id } = req.params

  const foundInstructor = data.instructors.find(function (instructor) {
    return instructor.id == id
  })

  if (!foundInstructor) return res.send("Instructor not found")


  const instructor = {
    ...foundInstructor,
    age: age(foundInstructor.birth),
    // .split transforma a string num array, basta selecionar onde deve ser quebrado.
    services: foundInstructor.services.split(","),
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at),
  }

  return res.render("instructors/show", { instructor })
}
exports.edit = function (req, res) {
  // req.params
  const { id } = req.params

  const foundInstructor = data.instructors.find(function (instructor) {
    return instructor.id == id
  })

  if (!foundInstructor) return res.send("Instructor not found")

  const instructor = {
    ...foundInstructor,
    birth: date(foundInstructor.birth).iso
  }


  return res.render('instructors/edit', { instructor })
}
exports.put = function (req, res) {
  const { id } = req.body
  let index = 0

  const foundInstructor = data.instructors.find(function (instructor, foundIndex) {
    if (id == instructor.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundInstructor) return res.send("Instructor not found")

  const instructor = {
    ...foundInstructor,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
  }

  data.instructors[index] = instructor

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Write error!")

    return res.redirect(`/instructors/${id}`)
  })
}
exports.delete = function (req, res) {
  const { id } = req.body

  const filteredInstructors = data.instructors.filter(function (instructor) {
    return instructor.id != id
  })

  data.instructors = filteredInstructors

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Write file error!")

    return res.redirect("/instructors")
  })
}