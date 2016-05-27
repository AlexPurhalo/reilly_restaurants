class AddAncestryToComment < ActiveRecord::Migration
  def change
    add_column :comments, :ancestry, :string
    add_index :comments, :string
  end
end
