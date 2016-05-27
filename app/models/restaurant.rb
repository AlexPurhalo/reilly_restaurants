class Restaurant < ActiveRecord::Base
  has_many :comments
  validates :name, :description, :address, presence: true
end
