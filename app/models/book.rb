class Book < ApplicationRecord
  enum status: [ :unread, :reading, :finished ]
  belongs_to :author
  accepts_nested_attributes_for :author
end
