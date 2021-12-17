class Product < ApplicationRecord
  # validates :name, presence: true

  validate :remove_tanaca

  def remove_tanaca
    return errors.add(:name, "田中は登録できない") if name.include?('tanaka')
  end
end
