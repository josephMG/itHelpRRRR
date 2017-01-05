json.extract! book, :id, :name, :status, :created_at, :updated_at, :author_name
json.author_id book.author.id
json.url book_url(book, format: :json)
