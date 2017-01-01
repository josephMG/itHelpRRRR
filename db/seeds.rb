# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
author = Author.create!(name: '睏睏')
author2 = Author.create!(name: '寶寶')
books = Book.create([
  {name: '稱過三十天不思議', status: Book.statuses[:unread], author: author},
  {name: '我為什麼要鐵人幫', status: Book.statuses[:unread], author: author2},
  {name: '我為什麼要寫程式', status: Book.statuses[:unread], author: author}
])
