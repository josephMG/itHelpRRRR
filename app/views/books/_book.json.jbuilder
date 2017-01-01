json.extract! book, :id, :name, :status, :created_at, :updated_at
json.author do
  json.name book.author.name
end
json.url book_url(book, format: :json)
