require 'rails_helper'

RSpec.describe Product, type: :model do

  describe '保存' do
    it 'できる' do
      pro = Product.new(name: 'hello')
      expect(pro).to be_valid
    end
  end
end