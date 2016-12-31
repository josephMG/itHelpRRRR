class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :name
      t.integer :status
      t.references :author, foreign_key: true

      t.timestamps
    end
  end
end
