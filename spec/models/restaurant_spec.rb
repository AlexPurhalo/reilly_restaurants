require 'rails_helper'

describe Restaurant do
  it 'returns name when to_s is called' do
    restaurant_name = Restaurant.new(name: 'Have a good Time')
    expect("#{restaurant_name}").to eq('Have a good Time')
  end
end