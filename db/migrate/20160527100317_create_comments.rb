class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :author
      t.text :body
      t.integer :rank
      t.belongs_to :restaurant, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
