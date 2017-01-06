class Book < ApplicationRecord
  enum status: [ :unread, :reading, :finished ]
  belongs_to :author
	accepts_nested_attributes_for :author
	default_scope {order(:id)}
	def author_name
		author.name
	end
end
