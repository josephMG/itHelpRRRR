class Book < ApplicationRecord
  enum status: [ :unread, :reading, :finished ]
  belongs_to :author
end
