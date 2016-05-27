# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  restaurant = Restaurant.create(
      name: "Bungalo",
      address: "Grow Street, 5",
      description: "You must try this!"
  )

  comments = Comment.create(
      author: "Alex",
      body: "I love this shit",
      rank: 9,
      restaurant_id: 1
  )
  ancestry_comment = Comment.create(author: "Bob", body: "Alex, I love this sit too", parent: Comment.find(1), restaurant_id: 1)